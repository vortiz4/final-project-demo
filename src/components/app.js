import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome-page";
import EntryPage from "../pages/entry-page";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {
	const [name, setName] = useState("");
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<div className={darkTheme ? "dark-theme" : "light-theme"}>
			<BrowserRouter>
				<Header />
					<button className="toggle-button" onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
						{darkTheme ? "Light Mode" : "Dark Mode"}
					</button>
				<Switch>
					<Route path="/" exact>
						<WelcomePage name={name} setName={setName} />
					</Route>
					<Route path="/entry">
						<EntryPage name={name} />
					</Route>
				</Switch>
				<Footer className="footer" />
			</BrowserRouter>
		</div>
	);
}

export default App;
