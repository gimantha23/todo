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

  // const onDeleteHandler = (deletedTodoID) => {
  //   setDeletingStatus(true);
  //   clearTimeout(deleteTimerIdRef.current);
  //   deleteTimerIdRef.current = setTimeout(() => {
  //     setDeletingStatus(false);
  //     delete todos[deletedTodoID];
  //     setTodos({
  //       ...todos
  //     });
  //   }, 1000);
  // };

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
        {Object.values(todos).map((todo) => (
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
          <b>Total items: {Object.keys(todos).length}</b>
          <br/>
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
