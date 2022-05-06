import React from "react";
import dynamic from "next/dynamic";
import "../SCSS/App.scss";
import { motion } from "framer-motion";
import Header from "../components/Header";
const AboutUs = (dynamic) => {
	"../components/AboutUs";
};

import Portfolio from "../components/Portfolio/PortfolioSection";
const Footer = (dynamic) => {
	"../components/Footer";
};

function App() {
	return (
		<>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, delay: 0.5 }}
			>
				<Header />
				<Portfolio />
				<AboutUs />
				<Footer />
			</motion.main>
		</>
	);
}

export default App;
