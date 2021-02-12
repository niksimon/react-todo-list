import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isComplete: false,
  });
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo;
