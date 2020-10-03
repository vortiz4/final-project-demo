import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import EntryPage from "../pages/entry-page";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<EntryPage />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

//** Pretty proud how I set this up myself! */
