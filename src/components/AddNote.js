import React from "react";

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

export default AddNote;
