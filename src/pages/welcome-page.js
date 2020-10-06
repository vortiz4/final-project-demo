import React from "react";
import { Link } from "react-router-dom";
import "../components/welcome-page.css";
import "../components/App.css";

function WelcomeScreen(props) {
	const { name, setName } = props;

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	return (
		<main>
			<h1 className="welcome">Welcome to JotIt!</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<label>
					<input
						type="text"
						value={name}
						onChange={onNameChange}
						placeholder="Enter your name here"
					/>
				</label>
			</form>
			<Link to="/entry" className="next_page">
				<button className="button">Next</button>
			</Link>
		</main>
	);
}

export default WelcomeScreen;

//**TODO: If I have time, include an alert() so the user has to put in a name in order to move onto the next page. */
//** This is for the first screen where user's enter their name! */
