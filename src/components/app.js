import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EntryPage from "../pages/entry-page";
import "./App.css";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/entry">
					<EntryPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

//** Pretty proud how I set this up myself! */