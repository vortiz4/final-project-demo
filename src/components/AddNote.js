import React from "react";
// import React, { useState, useContext, useRef, useEffect } from "react";
// import NotesContext from "./context";

class AddNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Jot down your thoughts here!",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert("A note was added: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="note-form">
				<form onSubmit={this.handleSubmit}>
					<label className="your_note">
						Your Note:
						<textarea value={this.state.value} onChange={this.handleChange} />
					</label>
					<button className="button" type="submit">
						Add
					</button>
				</form>
			</div>
		);
	}
}

//**! Disclaimer: This part below was only for learning purposes and referencing from a tutorial but ended up not using for this project. Great learning experience tho!! Maybe for a personal project? */
//**! git clone https://github.com/rivera1294/react-notes-app had a great YT tutorial! Uses React native code so that's where things got super wonky with uuid library so I installed react-uuid */
//* TODO: Get more react app online classes from Udemy lmao */
// function AddNote() {
// 	const { dispatch } = useContext(NotesContext);
// 	const [value, setValue] = useState("");

// 	/**
// 	 * ref focuses on the top input once page reloads
// 	 */
// 	let ref = useRef();

// 	useEffect(() => {
// 		ref.current.focus();
// 		/**
// 		 * We only want this effect to run one time when it renders
// 		 */
// 	}, []);

// 	/**
// 	 * Runs everytime you type into the input
// 	 */
// 	const handleChange = (event) => {
// 		/**
// 		 * Update the local state
// 		 */
// 		setValue(event.target.value);
// 	};
// 	/**
// 	 * This method will run when you click the Add Note button to submit the note
// 	 */
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		/**
// 		 * If you don't write anything and click Add button
// 		 */
// 		if (value.trim() === "") {
// 			alert("Cannot add a blank note");
// 		} else {
//             dispatch({ type: "ADD_NOTE", payload: value })
//             setValue('');
// 		}
// 	}

// 	return (
// 		<div className="note-form">
// 			<form onSubmit={handleSubmit} action="">
// 				<input type="text" ref={ref} onChange={handleChange} value={value} />
// 				<button>Add</button>
// 			</form>
// 		</div>
// 	);
// }

export default AddNote;
