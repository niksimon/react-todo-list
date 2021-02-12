import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });
  const submitUpdate = (todo) => {
    updateTodo(edit.id, todo);
    setEdit({
      id: null,
      text: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: todo.id, text: todo.text })} className="edit-icon" />
      </div>
    </div>
  ));
}

export default Todo;
