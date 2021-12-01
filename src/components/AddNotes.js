import React, { useContext, useState } from "react";
import NoteContext from "../Context/Notes/noteContext";

const AddNotes = () => {
  const context = useContext(NoteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Add Notes</h2>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              row="20"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
