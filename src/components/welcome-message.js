import React from "react";

function WelcomeMessage(props) {
	console.log(props);
    return <h1>Hello, {props.name}</h1>;
}

export default WelcomeMessage;

//**TODO: Insert an alert() to ask the user for their name input popup. */
//** Might take this and move it into a "welcome page" or "splash page" */
