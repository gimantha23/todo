import React from "react";

const Todo = ({ text, todo, onDeleteHandler, onCompleteHandler }) => {

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => onCompleteHandler(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => onDeleteHandler(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
