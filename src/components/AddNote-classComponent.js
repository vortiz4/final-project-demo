import React, { Component } from "react";
// import ErrorMsg from "../components/ErrorMsg";

class AddNote extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			// error: false,
			// errorMsg: "",
		};

		this.addNote = this.addNote.bind(this);
	}

	addNote(event) {
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

	//** Error Message */
	// errorMsg(event) {
	// 	if (this.theTitle.value === "") {
	// 		this.setErrorMsg({error: true, errorMsg: 'Please complete this form'})
	// 	}
	// }

	render() {
		return (
			<div>
				{/** This is where the Added notes appear */}
				<div className="entries">
					<ul>
						{this.state.items.map((val, index) => (
							<li key={index}>
								{val.title}: {val.note}{" "}
							</li>
						))}
					</ul>
				</div>
				{/** This is where you enter the note! Appear below the saved ones */}
				<div className="note_form">
				{/**Place Error Message here for title and note */}
				{/* <div>
					<ErrorMsg error={this.state.error} errorMsg={this.state.errorMsg} />
				</div> */}
					<form onSubmit={this.addNote}>
						<input
							className="title"
							type="text"
							placeholder="Enter title here"
							ref={(title) => (this.theTitle = title)}
						/>
						<textarea placeholder="Enter your note here" ref={(note) => (this.theNote = note)} />
						<button className="add_note" type="submit">
							Add Note
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddNote;
