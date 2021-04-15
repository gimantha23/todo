import React from "react";

var deltimer;
let delqueue = 0;

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  deletingStatus,
  setDeletingStatus,
}) => {

  deltimer = () =>
  setTimeout((deltimer) => {
      
    console.log(todo.id, "td id");
    if (delqueue > 1) {
      delqueue--;
      return;
    }
    setDeletingStatus(false);
    delqueue=0;
    setTodos(todos.filter((el) => el.id !== todo.id));
  }, 500);

  //Events
  const deleteHandler = () => {
    delqueue++;
    setDeletingStatus(true);
    clearTimeout(deltimer);
    deltimer();

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
