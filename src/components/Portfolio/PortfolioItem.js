import React from "react";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { motion, AnimatePresence, useTransform } from "framer-motion";
import styles from "../../SCSS/PortfolioItem.module.scss";
import Image from "next/image";

function PortfolioItem(props) {
	const [islightbox, setIsLightbox] = useState(false);
	function toggleLightbox(e) {
		e.preventDefault();
		setIsLightbox(!islightbox);
	}

	const itemAnim = {
		hidden: {
			scale: 0.0,
			y: 200,
			opacity: 0,
		},
		visible: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stifness: 100,
				duration: 1,
				delay: 0.3,
			},
		},
	};

	return (
		<div className={styles.item}>
			<motion.div
				variants={itemAnim}
				initial="hidden"
				whileInView="visible"
				className={styles.image}
				onClick={toggleLightbox}
				viewport={{ once: true }}
			>
				<Image src={props.src} alt="Portfolio image" />
			</motion.div>
			<AnimatePresence>
				{islightbox && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<a href="/" onClick={toggleLightbox}>
							<Lightbox src={props.src} />
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default PortfolioItem;
