import { createContext, useState } from "react";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState({});

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
