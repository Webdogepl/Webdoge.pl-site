import React from "react";
import "../SCSS/App.scss";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio/PortfolioSection";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function App() {
	return (
		<>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
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
