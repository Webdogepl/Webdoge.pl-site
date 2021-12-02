import React from "react";
import "../../SCSS/Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import images from "./importImages";
import { motion } from "framer-motion";

function PortfolioSection() {
	const loop = images.map((i) => <PortfolioItem src={i} key={i} />);

	const containerAnim = {
		hidden: { scale: 0.98, opacity: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.3,
				duration: 1,
				delayChildren: 1.5,
			},
		},
	};

	return (
		<motion.section
			className="portfolio"
			id="portfolio"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerAnim}
		>
			<div className="portfolio__title">
				<h2>Mostly we like bodybuilding art</h2>
				<p>And dogs</p>
			</div>
			<div className="portfolio__items">{loop}</div>
		</motion.section>
	);
}

export default PortfolioSection;
