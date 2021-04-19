import React, { useRef } from "react";

import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  deletingStatus,
  setDeletingStatus,
}) => {
  
  var deleteTimerIdRef = useRef(0);

  const onDeleteHandler = (deletedTodoID) => {
    setDeletingStatus(true);
    clearTimeout(deleteTimerIdRef.current);
    deleteTimerIdRef.current = setTimeout(() => {
      setDeletingStatus(false);
      setTodos(todos.filter((el) => el.id !== deletedTodoID));
    }, 4500);
  };

  const onCompleteHandler = (completedTodoID) => {
    setTodos(
      todos.map((item) => {
        if (item.id === completedTodoID) {
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
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            setDeletingStatus={setDeletingStatus}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}

        {deletingStatus && <p>Deleting In progress...</p>}
        <p>
          <b>Total items: {todos.length}</b>
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
