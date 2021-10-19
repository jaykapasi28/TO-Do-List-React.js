import React from "react";

function ToDoItem(props) {
  function clicked() {
    props.onChecked(props.id);
  }
  return (
    <div onClick={clicked}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
