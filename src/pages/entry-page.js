import React from "react";
import AddNote from "../components/AddNote";


function EntryPage(props) {
	return (
		<main>
			<h1 className="welcome"> Welcome {props.name}, jot down your notes</h1>
			<AddNote />
		</main>
);
}

export default EntryPage;
