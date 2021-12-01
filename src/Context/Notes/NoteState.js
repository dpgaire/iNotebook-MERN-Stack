import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const noteInitialState = [
    {
      _id: "61a6e24ed069d12fpd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24ed069d12fd32icb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24edr069d12fd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24edk069d12fd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24ed06t9d12fd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24ed06y9d12fd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24ed069dt12fd32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
    {
      _id: "61a6e24ed069d12fdh32cb986",
      user: "61a6e1c6d069d12fd32cb983",
      title: "React to knock out",
      description:
        "The react is the most beutiful thing i ever seen in my life",
      tag: "The tag is React",
      date: "2021-12-01T02:47:42.295Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInitialState);
  //Add Notes
  const addNotes = (title, description, tag) => {
    //TODO API Call
    console.log("Note added sucessfullly");
    const note = [
      {
        _id: "61a6e24eds06ff9d12fdth32cb986",
        user: "61a6e1c6d069d12fd32cb983",
        title: title,
        description: description,
        tag: tag,
        date: "2021-12-01T02:47:42.295Z",
        __v: 0,
      },
    ];
    setNotes(notes.concat(note));
  };
  //Update Notes
  const updateNotes = () => {};
  //Delete Notes
  const deleteNotes = (id) => {
    //TODO API Call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, addNotes, updateNotes, deleteNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
