import React, { useContext, useReducer } from "react";
import NotesContext from "../components/context";
import notesReducer from "../components/reducer";
import Nav from "../components/Nav";
import AddNote from "../components/AddNote";

/** This import was for the NoteList from a tutorial I was learning from but never got to reference it in this project */
// import NoteList from "../components/NoteList";

function EntryPage() {
	const initialState = useContext(NotesContext);
	const [state, dispatch] = useReducer(notesReducer, initialState);
	console.log(state);
	return (
		<NotesContext.Provider value={{ state, dispatch }}>
			<Nav />
			<AddNote />
		</NotesContext.Provider>
	);
}

export default EntryPage;
