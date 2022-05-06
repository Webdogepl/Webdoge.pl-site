import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "../SCSS/ContactForm.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const contactFormAnim = {
	hidden: { opacity: 0, y: 100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 2,
		},
	},
};

const sendMessageAnim = {
	hidden: { y: -300, opacity: 0 },
	visible: {
		y: [-300, 0, 0, 0, 0, 0, -300],
		opacity: [0, 1, 1, 1, 1, 1, 0],
		transition: {
			duration: 7,
		},
	},
};

const sendResult = (message) => {
	return (
		<AnimatePresence>
			<motion.div
				className="send-result"
				variants={sendMessageAnim}
				initial="hidden"
				animate="visible"
			>
				<h2>{message}</h2>
			</motion.div>
		</AnimatePresence>
	);
};

const ContactForm = () => {
	const form = useRef();
	const [isFilled, setIsFilled] = useState(false);
	const [isSendResult, setIsSendResult] = useState({
		status: false,
		message: "",
	});

	const activateSubmitButton = (e) => {
		e.currentTarget.user_email.value &&
		e.currentTarget.message.value &&
		e.currentTarget.policy.checked
			? setIsFilled(true)
			: setIsFilled(false);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		setIsFilled("disabled");

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					setIsSendResult({
						status: true,
						message: "Message send :) we will answer soon.",
					});
				},
				(error) => {
					setIsSendResult({
						status: true,
						message:
							"There was error while sending message, please try again later.",
					});
				}
			);
	};

	return (
		<motion.div
			variants={contactFormAnim}
			initial="hidden"
			whileInView="visible"
			className={styles.contactForm}
		>
			<form ref={form} onSubmit={sendEmail} onChange={activateSubmitButton}>
				<div className={styles.left}>
					<input type="text" name="user_name" placeholder="Name" />
					<input type="email" name="user_email" placeholder="Email" required />
					<textarea name="message" placeholder="Message" rows="7" />
					<label>
						<input type="checkbox" name="policy" required />I consent to
						processing of my data for the purpose of customer service.
					</label>
				</div>
				<div className={styles.right}>
					<input
						type="submit"
						value="Send"
						className={isFilled ? styles.submitActive : styles.submit}
					/>
				</div>
			</form>
			{isSendResult.status && sendResult(isSendResult.message)}
		</motion.div>
	);
};

export default ContactForm;
