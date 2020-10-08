import React, { useState } from "react";

function AddNote() {
	const emptyArea = [];

	const [items, setItems] = useState(emptyArea);

	const [title, setTitle] = useState("");

	const [entry, setEntry] = useState("");

	const [errorMsgTitle, setErrorMsgTitle] = useState();

	const [errorMsgEntry, setErrorMsgEntry] = useState();

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

	return (
		<div>
			<div className="entries">
				<ul>
					{items.map((val, index) => (
						<li key={index}>
							{val.title}: {val.note}{" "}
						</li>
					))}
				</ul>
			</div>
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
					<button className="add_note" type="submit">
						Add Note
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddNote;
