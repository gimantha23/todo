import React from "react";

import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  deletingStatus,
  setDeletingStatus,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            todos={todos}
            text={todo.text}
            deletingStatus={deletingStatus}
            setDeletingStatus={setDeletingStatus}
          />
        ))}
        {deletingStatus && <p>Deleting In progress...</p>}
        <p><b>Total items: {todos.length}</b></p>
      </ul>
    </div>
  );
};

export default TodoList;
