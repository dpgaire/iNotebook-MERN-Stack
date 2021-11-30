import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const noteInitialState = [
    {
      _id: "61a4e6248fafe234d294daed",
      title: "titleupdated",
      description: "the desc updated",
      tag: "helonupdated",
      date: "2021-11-29T14:39:32.691Z",
      __v: 0,
    },
    {
      _id: "61a4e6403fecb3bb7b589293",
      title: "the title",
      description: "the descriptipn",
      tag: "thetag",
      date: "2021-11-29T14:40:00.415Z",
      __v: 0,
    },
    {
      _id: "61a4e67e3fecb3bb7b589295",
      title: "thedefault",
      description: "the desc",
      tag: "",
      date: "2021-11-29T14:41:02.186Z",
      __v: 0,
    },
    {
      _id: "61a4ea3f8bd5a39ae1970427",
      title: "thedefault",
      description: "the desc",
      tag: "helo",
      date: "2021-11-29T14:57:03.459Z",
      __v: 0,
    },
    {
      _id: "61a4e6248fafe234d294daed",
      title: "titleupdated",
      description: "the desc updated",
      tag: "helonupdated",
      date: "2021-11-29T14:39:32.691Z",
      __v: 0,
    },
    {
      _id: "61a4e6403fecb3bb7b589293",
      title: "the title",
      description: "the descriptipn",
      tag: "thetag",
      date: "2021-11-29T14:40:00.415Z",
      __v: 0,
    },
    {
      _id: "61a4e67e3fecb3bb7b589295",
      title: "thedefault",
      description: "the desc",
      tag: "",
      date: "2021-11-29T14:41:02.186Z",
      __v: 0,
    },
    {
      _id: "61a4ea3f8bd5a39ae1970427",
      title: "thedefault",
      description: "the desc",
      tag: "helo",
      date: "2021-11-29T14:57:03.459Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInitialState);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
