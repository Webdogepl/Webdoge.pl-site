import React from "react";
import "../SCSS/Header.scss";
import TopBar from "./TopBar";
import HeaderTitle from "./HeaderTitle";
import Nav from "./Nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
	const snowflakesCloud = function () {
		const snowflakes = [];
		let count = 50;
		if (window.innerWidth < 420) {
			count = 20;
		}
		for (let i = 0; i < count; i++) {
			snowflakes.push(<div key={i} className="b"></div>);
		}

		return snowflakes;
	};

	const [toggleNav, setToggleNav] = useState(false);

	const showNav = () => {
		setToggleNav(!toggleNav);
	};

	const NavVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<header className="App-header" id="top">
			{snowflakesCloud()}

			<TopBar nav={showNav} isNav={toggleNav} />

			<AnimatePresence>
				{toggleNav && (
					<motion.div
						variants={NavVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<Nav />
					</motion.div>
				)}
			</AnimatePresence>

			<div>
				<HeaderTitle />
			</div>
		</header>
	);
}

export default Header;
