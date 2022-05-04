import React from "react";
import portfolio from "../../SCSS/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import images from "./importImages";
import { motion } from "framer-motion";

function PortfolioSection() {
	const loop = images.map((i) => <PortfolioItem src={i} key={i} />);

	const containerAnim = {
		hidden: { y: 100, opacity: 1 },
		visible: {
			opacity: 1,
			y: 0,
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
			className={portfolio.container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerAnim}
		>
			<div className={portfolio.title}>
				<h2>Mostly we like bodybuilding art</h2>
				<p>And dogs</p>
			</div>
			<div className={portfolio.items}>{loop}</div>
		</motion.section>
	);
}

export default PortfolioSection;
