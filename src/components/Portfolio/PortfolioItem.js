import React from "react";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../SCSS/PortfolioItem.module.scss";
import Image from "next/image";

function PortfolioItem(props) {
	const [islightbox, setIsLightbox] = useState(false);
	function toggleLightbox() {
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
		<>
			<div className={styles.item}>
				<AnimatePresence>
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
					{islightbox && (
						<div onClick={toggleLightbox}>
							<Lightbox src={props.src} />
						</div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

export default PortfolioItem;
