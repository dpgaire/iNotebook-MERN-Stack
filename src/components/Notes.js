import React, { useContext } from "react";
import NoteItem from "../components/NoteItem";
import AddNotes from "./AddNotes";
import NoteContext from "../Context/Notes/noteContext";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <div>
      <AddNotes />
      <h2>My notes </h2>
      <div className="row my-4">
        {notes.map((note) => {
          return <NoteItem key={note._id} noteData={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
