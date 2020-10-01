import React, { useContext, useReducer } from "react";
import NotesContext from "../components/context";
import Nav from "../components/Nav";
import AddNote from "../components/AddNote";

function EntryPage() {
	const initialState = useContext(NotesContext);
	const [state, dispatch] = useReducer(initialState);
	console.log(state);
	return (
		<NotesContext.Provider value={{ state, dispatch }}>
			<Nav />
			<AddNote />
		</NotesContext.Provider>
	);
}

export default EntryPage;

//* I tweaked with some of the code here so that the note would appear */
//**! git clone https://github.com/rivera1294/react-notes-app */
