import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
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
            />
        ))}
        <p>Total items: {todos.length}</p>
      </ul>
    </div>
  );
};

export default TodoList;
