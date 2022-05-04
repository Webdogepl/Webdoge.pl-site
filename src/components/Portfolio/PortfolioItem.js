import React from "react";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../SCSS/PortfolioItem.module.scss";
import Image from "next/image";

function PortfolioItem(props) {
	const [islightbox, setIsLightbox] = useState(false);
	function toggleLightbox(e) {
		e.preventDefault();
		islightbox ? setIsLightbox(false) : setIsLightbox(true);
	}

	const itemAnim = {
		hidden: {
			y: 0,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<div className={styles.item}>
			<a className={styles.link} href={props.src} onClick={toggleLightbox}>
				<motion.div variants={itemAnim} className={styles.image}>
					<Image src={props.src} alt="Portfolio image" />
				</motion.div>
			</a>
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
