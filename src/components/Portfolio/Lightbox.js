import React from "react";
import "../../SCSS/Lightbox.scss";
import { motion } from "framer-motion";

function Lightbox(props) {
	return (
		<>
			<div className="lightbox__overlay"></div>
			<div className="lightbox">
				<motion.img
					drag
					drag="x"
					className="lightbox__image"
					src={props.src}
					alt="Lightbox"
				/>
			</div>
		</>
	);
}

export default Lightbox;
