import React from "react";
import headerTitle from "../SCSS/HeaderTitle.module.scss";

function HeaderTitle() {
	return (
		<div className={headerTitle.container}>
			<h1 className={headerTitle.first}>Damn</h1>
			<h2 className={headerTitle.second}>Good</h2>
			<h2 className={headerTitle.third}>Code</h2>
		</div>
	);
}

export default HeaderTitle;
