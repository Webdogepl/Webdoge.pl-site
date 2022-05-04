import React from "react";
import topbar from "../SCSS/TopBar.module.scss";
import LogoWhite from "../img/LogoWhite.webp";
import Image from "next/image";

function TopBar() {
	return (
		<div className={topbar.container}>
			<Image className={topbar.logo} src={LogoWhite} alt="Logo" />
		</div>
	);
}

export default TopBar;
