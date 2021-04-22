import React, { useRef, useContext } from "react";

import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = ({
  // todos,
  // setTodos,
  // filteredTodos,
  deletingStatus,
  setDeletingStatus,
}) => {
  //context
  const { todos, setTodos, filteredTodos } = useContext(TodoContext);

  var deleteTimerIdRef = useRef(0);

  const onDeleteHandler = (deletedTodoID) => {
    setDeletingStatus(true);
    clearTimeout(deleteTimerIdRef.current);
    deleteTimerIdRef.current = setTimeout(() => {
      setDeletingStatus(false);

      const { [deletedTodoID]: remove, ...rest } = todos;
      setTodos(rest);
    }, 1000);
  };

  const onCompleteHandler = (completedTodoID) => {
    setTodos((prevState) => ({
      ...prevState,
      [completedTodoID]: {
        ...todos[completedTodoID],
        completed: !todos[completedTodoID]["completed"],
      },
    }));
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Object.values(filteredTodos).map((todo) => (
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
          <b>Total items: {Object.keys(filteredTodos).length}</b>
          <br />
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
