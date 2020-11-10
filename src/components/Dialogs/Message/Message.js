import React from "react";
import "./../Dialogs.css";

const Message = (props) => {
  return (
    <div>
      <div className="message">{props.message}</div>
      </div>
    )
};

export default Message;
