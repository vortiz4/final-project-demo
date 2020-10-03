import React from "react";
import WelcomeMessage from "./welcome-message";
import "../components/Header.css";


function Header() {
	return (
		<nav className="name">
			<WelcomeMessage name="User-ID1"></WelcomeMessage>
		</nav>
	);
}
export default Header;

//**TODO: Make this page into the header? And then have this page ask for the user's name! */
//** User1 is a placeholder for now until I setup a splash page when asking for the user's name and then taking that data to be displayed within this div tag */
