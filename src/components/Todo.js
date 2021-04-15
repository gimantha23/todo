import React from "react";

let queue = 0;

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  deletingStatus,
  setDeletingStatus,
}) => {
  //Events
  const deleteHandler = () => {
    queue++;
    setDeletingStatus(true);

    setTimeout((timer) => {
      setDeletingStatus(false);

      if (queue > 1) {
        queue--;
        return;
      }
      setTodos(todos.filter((el) => el.id !== todo.id));
    }, 2500);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
