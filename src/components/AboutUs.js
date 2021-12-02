import { motion } from "framer-motion";
import React from "react";
import "../SCSS/AboutUs.scss";

function AboutUs() {
	return (
		<motion.div
			initial={{ pathLength: 0 }}
			whileInView={{ pathLength: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
		>
			<article className="aboutUs" id="aboutUs">
				<h2 className="aboutUs__title">Five short reasons why us:</h2>
				<ul className="aboutUs__list">
					<li>
						<b>Design & development is our full time job</b> - we will not leave
						you with barely working site and not responding, because academic
						year was started or we found another things to do.
					</li>
					<li>
						<b>Years of experience</b> - if you have a problem with site, we've
						probably been there, done that
					</li>
					<li>
						<b>Impossible is nothing (almost)</b> - in 99% cases when someone
						tells you that something can't be done - it can be, but not many
						people know how.
					</li>
					<li>
						<b>Modern technologies:</b> Node, React, GraphQl, SASS, WP & Woo,
						Next
					</li>
					<li>
						<b>We have dog</b>
					</li>
				</ul>
			</article>
		</motion.div>
	);
}

export default AboutUs;
