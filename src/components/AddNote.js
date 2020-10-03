import React, { Component } from "react";

class AddNote extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		};

		this.addNote = this.addNote.bind(this);
	}

	addNote(event) {
		console.log("Note Added");

		if (this.theTitle.value !== "") {
			var newItem = {
				title: this.theTitle.value,
				note: this.theNote.value,
			};
		}

		this.setState((prevState) => {
			return {
				items: prevState.items.concat(newItem),
			};
		});

		this.theNote.value = "";
		this.theTitle.value = "";

		console.log(this.state.items);

		event.preventDefault();
	}

	/* previous code from Form React, easy to understand! */

	// class AddNote extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: "Jot down your thoughts here!",
	// 	};

	// 	this.handleChange = this.handleChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleChange(event) {
	// 	this.setState({ value: event.target.value });
	// }

	// handleSubmit(event) {
	// 	alert("A note was added: " + this.state.value);
	// 	event.preventDefault();
	// }

	render() {
		return (
			<div>
		{/** This is where the Added notes appear */}
				<div className="entries">
					<ul>
						{this.state.items.map((val) => (
							<li>
								{val.title} - {val.note}{" "}
							</li>
						))}
					</ul>
				</div>
		{/** This is where you enter the note! Appear below the saved ones */}
				<div className="note-form">
				<form onSubmit={this.addNote}>
					<input className="title"
						type="text"
						placeholder="Enter note title here"
						ref={(title) => (this.theTitle = title)}
					/>
					<textarea placeholder="Enter your note here" ref={(note) => (this.theNote = note)} />
					<button className="add_note" type="submit">Add Note</button>
				</form>
				</div>

				{/* previous code from Form React */}

				{/* <form onSubmit={this.handleSubmit}>
					<label className="your_note">
						Your Note:
						<textarea className="container" value={this.state.value} onChange={this.handleChange} />
					</label>
					<button className="button" type="submit">
						Add
					</button>
				</form> */}
			</div>
		);
	}
}

//** react-uuid library is still installed in this project now I need help with the documenting the uuids since each note needs a unique "key" according to the chrome debugger console */
//** This was easier to understand */

export default AddNote;
