import React from "react";
import header from "../SCSS/Header.module.scss";
import TopBar from "./TopBar";
import HeaderTitle from "./HeaderTitle";

function Header() {
	return (
		<header className={header.container}>
			<TopBar />
			<div>
				<HeaderTitle />
			</div>
		</header>
	);
}

export default Header;
