import React, { useContext } from "react";
import NoteContext from "../Context/Notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { noteData } = props;
  const { deleteNotes } = context;

  return (
    <div className="col-md-3">
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{noteData.title}</h5>
            <button
              className=" btn btn-primary"
              onClick={() => {
                // deleteNotes(noteData._id);
                deleteNotes(noteData._id);
              }}
            >
              Delete
            </button>
            <i className="fas fa-edit"></i>
          </div>
          <p className="card-text">{noteData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
