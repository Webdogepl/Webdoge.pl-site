import React from "react";
import portfolio from "../../SCSS/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import images from "./importImages";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function PortfolioSection() {
	const [isLoadMore, setIsLoadMore] = useState(false);

	function loadImages(start, end) {
		return images
			.slice(start, end)
			.map((i) => <PortfolioItem src={i} key={i.src} />);
	}

	return (
		<section className={portfolio.container}>
			<div className={portfolio.title}>
				<h2>Mostly we like bodybuilding art</h2>
				<p>And dogs</p>
			</div>
			<div className={portfolio.items}>{loadImages(0, 8)}</div>
			{!isLoadMore && (
				<AnimatePresence>
					<button
						className={portfolio.button}
						onClick={() => setIsLoadMore(true)}
					>
						Load More
					</button>
				</AnimatePresence>
			)}
			{isLoadMore && loadImages(8, 24)}
		</section>
	);
}

export default PortfolioSection;
