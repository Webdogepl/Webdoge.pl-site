import React from "react";
import "../SCSS/App.scss";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
const AboutUs = React.lazy(() => import("./AboutUs.js"));
const Portfolio = React.lazy(() => import("./Portfolio/PortfolioSection"));
const Footer = React.lazy(() => import("./Footer"));

function App() {
	return (
		<>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, delay: 1 }}
			>
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<Portfolio />
					<AboutUs />
					<Footer />
				</Suspense>
			</motion.main>
		</>
	);
}

export default App;
