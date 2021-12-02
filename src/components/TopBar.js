import React from "react";
import LogoWhite from "../img/LogoWhite.webp";
import MenuIcon from "../img/MenuIcon.svg";
import CloseIcon from "../img/CloseIcon.svg";
import "../SCSS/TopBar.scss";

function TopBar(props) {
	return (
		<div className="topbar-wrapper">
			<img className="topbar-wrapper__logo" src={LogoWhite} alt="Logo" />
			<img
				className="topbar-wrapper__nav-icon"
				onClick={() => props.nav()}
				src={props.isNav ? CloseIcon : MenuIcon}
				alt="Nav icon"
			/>
		</div>
	);
}

export default TopBar;
