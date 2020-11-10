import React from "react";
import "./../Dialogs.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className="dialog">       
      <NavLink to={"/dialogs/" + props.id}> <img className="imgDialodItem" src="https://wikipet.ru/uploads/posts/2018-09/1537176702_screenshot_1.png"></img>{props.name}</NavLink>     
    </div>
  );
};

export default DialogItem;
