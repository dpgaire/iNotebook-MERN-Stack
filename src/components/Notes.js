import NoteItem from "../components/NoteItem";
import React, { useContext } from "react";
import NoteContext from "../Context/Notes/noteContext";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  console.log(notes);
  return (
    <div>
      <div className="row my-4">
        {notes.map((note) => {
          return <NoteItem noteData={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
