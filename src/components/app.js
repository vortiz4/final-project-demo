import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome-page";
import EntryPage from "../pages/entry-page";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {
	const [name, setName] = useState("");

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/welcome" exact>
					<WelcomePage name={name} setName={setName} />
				</Route>
				<Route path="/entry">
					<EntryPage name={name}/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
