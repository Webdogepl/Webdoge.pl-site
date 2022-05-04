import React from "react";
import LogoWhite from "../img/LogoWhite.webp";
import "../SCSS/TopBar.scss";

function TopBar() {
	return (
		<div className="topbar-wrapper">
			<img className="topbar-wrapper__logo" src={LogoWhite} alt="Logo" />
		</div>
	);
}

export default TopBar;
