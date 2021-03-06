import React from "react";
import styles from "../SCSS/Footer.module.scss";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const titleAnim = {
	hidden: {
		scale: 0.8,
		x: -50,
		opacity: 0,
	},
	visible: {
		scale: 1,
		x: 0,
		opacity: 1,
		transition: {
			delay: 1,
			duration: 2,
			staggerChildren: 3,
			delayChildren: 3,
		},
	},
};

const boxAnim = {
	hidden: {
		scale: 0.5,
		y: 50,
		opacity: 0,
	},
	visible: {
		scale: 1,
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			duration: 2,
		},
	},
};

function Footer() {
	return (
		<motion.footer
			className={styles.footer}
			id="contact"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div className={styles.titleContainer} variants={titleAnim}>
				<h2 className={styles.title}>Write to us</h2>
				<h3 className={styles.subtitle}>If you like dogs</h3>
			</motion.div>
			<div className={styles.content}>
				<motion.div className={styles.contentBox} variants={boxAnim}>
					<a href="mailto:office@webdoge.pl">
						<h4 className={styles.contentBox__title}>office@webdoge.pl</h4>
					</a>
				</motion.div>
				<motion.div className={styles.contentBox} variants={boxAnim}>
					<h4 className={styles.contentBox__title}>Programming</h4>
					<a href="https://wa.me/48510587327">
						<p>WhatsApp</p>
						<p>+48 510 587 327</p>
					</a>
				</motion.div>
				<motion.div className={styles.contentBox} variants={boxAnim}>
					<h4 className={styles.contentBox__title}>Design</h4>
					<a href="https://wa.me/48737903237">
						<p>WhatsApp</p>
						<p>+48 737 903 237</p>
					</a>
				</motion.div>
				<motion.div className={styles.contentBox} variants={boxAnim}>
					<h4 className={styles.contentBox__title}>The Dog</h4>
					<p>
						He has no phone, but you can find him on:{" "}
						<a
							href="https://www.instagram.com/dailybubur/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</p>
				</motion.div>
			</div>
			<ContactForm />
		</motion.footer>
	);
}

export default Footer;
