import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Evgen" },
    { id: 2, name: "Vika" },
    { id: 3, name: "Grisha" },
    { id: 4, name: "koly" },
    { id: 5, name: "Sasha" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello hav are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];
  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className="dialogs">
      <div className="dialogs-item">{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
