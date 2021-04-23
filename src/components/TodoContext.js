import { createContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (currentTodos, action) => {
  switch (action.type) {
    case "submit-todos":
      return { ...currentTodos, [action.newtodo.id]: action.newtodo };

    case "delete-todos":
      console.log(action.id);
      const { [action.id]: remove, ...rest } = action.todo;
      return rest;

    case "complete-todos":
      return {
        ...currentTodos,
        [action.id]: {
          ...action.todo[action.id],
          completed: !action.todo[action.id]["completed"],
        },
      };
    default:
      return currentTodos;
  }
};

const todoFilteredReducer = (currentFiltered, action) => {
  switch (action.type) {
    case "filter-completed":
      Object.keys(action.todos).forEach((todo) => {
        if (!action.todos[todo].completed) {
          delete action.filtered[todo];
        }
      });
      return action.filtered;

    case "filter-incompleted":
      Object.keys(action.todos).forEach((todo) => {
        if (action.todos[todo].completed) {
          delete action.filtered[todo];
        }
      });
      return action.filtered;
      
    default:
      return action.filtered;
  }
};

function TodoContextProvider({ children }) {
  // const [todos, setTodos] = useState({});
  // const [filteredTodos, setFilteredTodos] = useState({});

  const [todos, dispatch] = useReducer(todoReducer, {});
  const [filteredTodos, dispatchFiltered] = useReducer(todoFilteredReducer, {});

  return (
    <TodoContext.Provider
      value={{ todos, filteredTodos, dispatch, dispatchFiltered }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
