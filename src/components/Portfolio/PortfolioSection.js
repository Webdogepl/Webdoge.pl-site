import React from "react";
import styles from "../../SCSS/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import images from "./importImages";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function PortfolioSection() {
	const [isLoadMore, setIsLoadMore] = useState(false);

	const buttonAnim = {
		hidden: {
			scale: 0,
			opacity: 0,
			transition: {
				duration: 0.6,
			},
		},
		visible: {
			scale: 1,
			opacity: 1,
			skew: -5,
			transition: {
				type: "spring",
				stifness: 100,
				duration: 0.6,
				delay: 1,
			},
		},
	};

	function loadImages(start, end) {
		return images
			.slice(start, end)
			.map((i) => <PortfolioItem src={i} key={i.src} />);
	}

	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<h2>Mostly we like bodybuilding art</h2>
				<p>And dogs</p>
			</div>
			<div className={styles.items}>{loadImages(0, 8)}</div>
			<AnimatePresence exitBeforeEnter>
				{!isLoadMore && (
					<motion.div
						variants={buttonAnim}
						initial="hidden"
						whileInView="visible"
						exit="hidden"
						key="loadMore"
						className={styles.loadMoreWrapper}
					>
						<button
							className={styles.loadMore}
							onClick={() => setIsLoadMore(true)}
						>
							Load More
						</button>
					</motion.div>
				)}

				{isLoadMore && loadImages(8, 24)}
			</AnimatePresence>
		</section>
	);
}

export default PortfolioSection;
