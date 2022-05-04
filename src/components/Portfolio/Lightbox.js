import React from "react";
import styles from "../../SCSS/Lightbox.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

function Lightbox(props) {
	return (
		<>
			<div className={styles.overlay}></div>
			<div className={styles.lightbox}>
				<motion.div drag="x" className={styles.image} alt="Lightbox">
					<Image
						src={props.src}
						alt="Lightbox image"
						width={1200}
						height={1200}
					/>
				</motion.div>
			</div>
		</>
	);
}

export default Lightbox;
