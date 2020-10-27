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

ReactDOM.render(<App posts={posts}/>, document.getElementById("root"));
