import React, { useState } from "react";

function AddNote() {
	const fakeItems = [
		{ title: "Title", note: "note" },
		{ title: "Title 2", note: "note 2" },
	];

	const [items, setItems] = useState(fakeItems);

	const [title, setTitle] = useState("");

	const [entry, setEntry] = useState("");

	const onAddNote = (event) => {
		event.preventDefault();
		if (title === "") {
			alert("Please Enter a Title");
			return;
		}
		if (entry === "") {
			alert("Please Enter a Note");
			return;
		}
		setItems([...items, { title: title, note: entry }]);
		setTitle("");
		setEntry("");
	};

	const onTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const onEntryChange = (event) => {
		setEntry(event.target.value);
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
					<input
						className="title"
						type="text"
						placeholder="Enter title here"
						value={title}
						onChange={onTitleChange}
					/>
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
