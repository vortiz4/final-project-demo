import React, { useState } from "react";
import "../components/App.css";
import "../components/index.css";

function AddNote() {
	const emptyArea = [];

	const [items, setItems] = useState(emptyArea);

	const [title, setTitle] = useState("");

	const [entry, setEntry] = useState("");

	const [errorMsgTitle, setErrorMsgTitle] = useState();

	const [errorMsgEntry, setErrorMsgEntry] = useState();

	const [buttonText, setButtonText] = useState("Add Note");


	const onAddNote = (event) => {
		event.preventDefault();
		if (title === "") {
			setErrorMsgTitle("Please Enter a Title");
			return;
		}
		if (entry === "") {
			setErrorMsgEntry("Please Enter a Note");
			return;
		}
		setItems([...items, { title: title, note: entry }]);
		setTitle("");
		setEntry("");
	};

	const onTitleChange = (event) => {
		setTitle(event.target.value);
		if (title !== "") {
			setErrorMsgTitle("");
		}
	};

	const onEntryChange = (event) => {
		setEntry(event.target.value);
		if (title !== "") {
			setErrorMsgEntry("");
		}
	};

	const changeText = (text) => setButtonText(text);

	//** Delete Button that appears under each note */
	const values = [...items];
	const deleteEntry = () => {
		values.splice(items, 1);
		setItems(values);
	};

	//** Edit Button that appears right next to the Delete Button */

	return (
		<div className="container Site">
			<div className="Site-content">
				<div className="note_form">
					<form onSubmit={onAddNote}>
						<div className="error">{errorMsgTitle}</div>
						<input
							className="title"
							type="text"
							placeholder="Enter title here"
							value={title}
							onChange={onTitleChange}
						/>
						<div className="error">{errorMsgEntry}</div>
						<textarea placeholder="Enter your note here" value={entry} onChange={onEntryChange} />
						<button
							className="add_note"
							type="submit"
							onClick={() => changeText("Add Another Note")}
						>
							{buttonText}
						</button>
					</form>
				</div>
				<div className="entries">
					<ul>
						{items.map((val, index) => (
							<li key={index} className="list_item">
								<div className="title_entry">{val.title}:</div>
								<div className="note_entry">{val.note} </div>
								<button className="delete" 
								onClick={() => deleteEntry(items)}
								>
									Delete
								</button>
								<button className="edit">Edit</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AddNote;
