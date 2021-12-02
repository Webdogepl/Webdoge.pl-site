import React from "react";
import "../SCSS/Nav.scss";
import { motion } from "framer-motion";

const liVariants = {
	hidden: {
		x: 0,
	},
	hover: {
		x: 15,
	},
	transition: {
		duration: 1,
		repeat: Infinity,
	},
};

function Nav() {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<a href="#portfolio">
					<motion.li variants={liVariants} initial="hidden" whileHover="hover">
						Portfolio
					</motion.li>
				</a>
				<a href="#aboutUs">
					<motion.li variants={liVariants} initial="hidden" whileHover="hover">
						About Us
					</motion.li>
				</a>
				<a href="#contact">
					<motion.li variants={liVariants} initial="hidden" whileHover="hover">
						Contact
					</motion.li>
				</a>
			</ul>
		</nav>
	);
}

export default Nav;
