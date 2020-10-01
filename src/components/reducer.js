// import uuid from "react-uuid";

/**
 * The reducer hook passes two things- reducer function and initialState. It also let's you edit your note and save it.
 */

// function reducer(state, action) {
// 	switch (action.type) {
// 		case "SET_CURRENT-NOTE":
// 			return {
// 				...state,
// 				currentNote: action.payload,
// 			};
// 		case "DELETE_NOTE":
// 			const deletedNotes = state.notes.filter((note) => note.id !== action.payload);
// 			return {
// 				...state,
// 				notes: deletedNotes,
// 			};
// 		/**
// 		 * Adds the notes and spreads them apart
// 		 */
// 		/**
// 		 * uuid library added so it can create a new unique id for each note array
// 		 */
// 		case "ADD_NOTE":
// 			// const array = ['one', 'two', 'three']
// 			// export const LineItem = item => <li key={uuid()}>{item}</li>
// 			// export const List = () => array.map(item => <LineItem item={item} />)

// 			const newNote = {
// 				id: uuid.v4(),
// 				text: action.payload,
// 			};
// 			const addedNotes = [...state.notes, newNote];
// 			return {
// 				...state,
// 				notes: addedNotes,
// 			};
// 		default:
// 			return state;
// 		// 	const newNote = {
// 		// 		id: uuid.v4(),
// 		// 		text: action.payload,
// 		// 	};
// 		// 	const addedNotes = [...state.notes, newNote];
// 		// 	return {
// 		// 		...state,
// 		// 		notes: addedNotes,
// 		// 	};
// 		// default:
// 		// 	return state;
// 	}
// }

// export default reducer;
