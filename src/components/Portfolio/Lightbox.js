import React from "react";
import "../../SCSS/Lightbox.scss";

function Lightbox(props) {
	return (
		<>
			<div className="lightbox__overlay"></div>
			<div className="lightbox">
				<img className="lightbox__image" src={props.src} alt="Lightbox" />
			</div>
		</>
	);
}

export default Lightbox;
