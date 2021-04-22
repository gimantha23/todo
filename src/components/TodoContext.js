import { createContext, useState } from "react";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState({});
  const [filteredTodos, setFilteredTodos] = useState({});

  return (
    <TodoContext.Provider value={{todos, setTodos, filteredTodos, setFilteredTodos}}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
