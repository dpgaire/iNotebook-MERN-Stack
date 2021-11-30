import React from "react";

const NoteItem = (props) => {
  const { noteData } = props;

  return (
    <div className="col-md-3">
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">{noteData.title}</h5>
          <p className="card-text">{noteData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
