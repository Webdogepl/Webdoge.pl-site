import React from "react";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { motion, AnimatePresence } from "framer-motion";

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
		<div className="portfolio__item">
			<a
				className="portfolio__item_link"
				href={props.src}
				onClick={toggleLightbox}
			>
				<motion.img
					variants={itemAnim}
					className="portfolio__item__image"
					src={props.src}
					alt="Portfolio item"
				/>
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
