import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";
import { toggleTodo, deleteTodos, deleteStatus } from "../reducers";

const TodoList = () => {
  var deleteTimerIdRef = useRef(0);
  const filteredTodos = useSelector((state) => state.filteredTodos);
  const deletingStatus = useSelector((state) => state.deleteStatus);
  const dispatch = useDispatch();

  const onDeleteHandler = (deletedTodoID) => {
    dispatch(deleteStatus(true));
    clearTimeout(deleteTimerIdRef.current);
    deleteTimerIdRef.current = setTimeout(() => {
      dispatch(deleteStatus(false));
      dispatch(deleteTodos(deletedTodoID));
    }, 1000);
  };

  const onCompleteHandler = (toggledTodoID) => {
    dispatch(toggleTodo(toggledTodoID));
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
