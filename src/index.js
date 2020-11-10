import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let posts = [
    { id: 1, message: "Hi how are you ?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Hi how  ?", likesCount: 12 },
    { id: 4, message: "I post", likesCount: 11 },
  ];
let dialogs = [
    { id: 1, name: "Evgen" },
    { id: 2, name: "Vika" },
    { id: 3, name: "Grisha" },
    { id: 4, name: "koly" },
    { id: 5, name: "Sasha" },
  ];
let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello hav are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
];
  
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById("root"));
