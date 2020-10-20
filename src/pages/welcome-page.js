import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/welcome-page.css";
import "../components/App.css";

function WelcomeScreen(props) {
	const [errorMessage, setErrorMessage] = useState();

	const { name, setName } = props;

	const onNameChange = (event) => {
		setName(event.target.value);
		if (name !== "") {
			setErrorMessage("");
		}
	};

	const onNextClick = (event) => {
		if (name === "") {
			event.preventDefault();
			setErrorMessage("Please enter a name");
		}
	};

	return (
		<div className="Site">
			<div className="Site-content">
				<h1 className="welcome">Welcome to JotIt!</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="error">{errorMessage}</div>
					<label>
						<input
							type="text"
							value={name}
							onChange={onNameChange}
							placeholder="Enter your name here"
						/>
					</label>
				</form>
				<div className="next_page">
					<Link to="/entry" className="enter_button" onClick={onNextClick}>
						Enter
					</Link>
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
