import React from "react";
import "../SCSS/App.scss";
import { motion } from "framer-motion";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Portfolio from "../components/Portfolio/PortfolioSection";
import Footer from "../components/Footer";

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
