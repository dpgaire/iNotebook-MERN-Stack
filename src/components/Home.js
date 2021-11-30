import React, { useContext } from "react";
import NoteContext from "../Context/Notes/noteContext";
import Notes from "./Notes";

function Home() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <h2>Add Notes</h2>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputTitle1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription1" className="form-label">
              Description
            </label>
            <textarea
              type="password"
              className="form-control"
              id="exampleInputDescription1"
              row="20"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTag" className="form-label">
              Tag
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputTag"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <h2>My Notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default Home;
