import React, { useRef } from "react";

import Todo from "./Todo";

const TodoList = ({
  filteredTodos,
  deletingStatus,
  dispatch,
}) => {
  var deleteTimerIdRef = useRef(0);

  const onDeleteHandler = (deletedTodoID) => {
    dispatch({ type: "delete-todos", id: null, deleteStatus: true });
    clearTimeout(deleteTimerIdRef.current);
    deleteTimerIdRef.current = setTimeout(() => {
      dispatch({ type: "delete-todos", id: deletedTodoID, deleteStatus: false });
    }, 1000);
  };

  const onCompleteHandler = (toggledTodoID) => {
    dispatch({ type: "toggle-todo", id: toggledTodoID });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Object.values(filteredTodos).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            text={todo.text}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}

        {deletingStatus && <p>Deleting In progress...</p>}
        <p>
          <b>Total items: {Object.keys(filteredTodos).length}</b>
          <br />
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
