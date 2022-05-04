import React from "react";
import "../SCSS/Header.scss";
import TopBar from "./TopBar";
import HeaderTitle from "./HeaderTitle";
import Nav from "./Nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Snowfall from "react-snowfall";

function Header() {
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
		<header className="App-header" id="App-header">
			{/* <Snowfall snowflakeCount={50} /> */}
			<TopBar nav={showNav} isNav={toggleNav} />

			<div>
				<HeaderTitle />
			</div>
		</header>
	);
}

export default Header;
