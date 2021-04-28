// import { createContext, useReducer } from "react";

// const TodoContext = createContext();

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "upload-status":
//       return { ...state, uploadingStatus: action.payload, };
//     case "toggle-status":
//       return { ...state, selectedStatus: action.payload };
//     case "text-input":
//       return {
//         ...state,
//         inputText: action.payload,
//       };
//     case "submit-todos":
//       return {
//         ...state,
//         todos: { ...state.todos, [action.payload.id]: action.payload },
//       };
//     case "delete-todos":
//       const { [action.id]: remove, ...rest } = state.todos;
//       return {
//         ...state,
//         todos: rest,
//         deletingStatus: action.deleteStatus,
//       };
//     case "toggle-todo":
//       return {
//         ...state,
//         todos: {
//           ...state.todos,
//           [action.id]: {
//             ...state.todos[action.id],
//             completed: !state.todos[action.id]["completed"],
//           },
//         },
//       };
//     case "filter-completed":
//       Object.keys(state.todos).forEach((todo) => {
//         if (!state.todos[todo].completed) {
//           delete action.filtered[todo];
//         }
//       });
//       return { ...state, todos: state.todos, filteredTodos: action.filtered };
//     case "filter-incompleted":
//       Object.keys(state.todos).forEach((todo) => {
//         if (state.todos[todo].completed) {
//           delete action.filtered[todo];
//         }
//       });
//       return { ...state, todos: state.todos, filteredTodos: action.filtered };
//     default:
//       return { ...state, todos: state.todos, filteredTodos: action.filtered };
//   }
// };

// function TodoContextProvider({ children }) {
//   const [
//     {
//       todos,
//       filteredTodos,
//       deletingStatus,
//       uploadingStatus,
//       selectedStatus,
//       inputText,
//     },
//     dispatch,
//   ] = useReducer(todoReducer, {
//     todos: {},
//     filteredTodos: {},
//     deletingStatus: false,
//     uploadingStatus: false,
//     selectedStatus: "all",
//     inputText: "",
//   });

//   return (
//     <TodoContext.Provider
//       value={{
//         todos,
//         filteredTodos,
//         deletingStatus,
//         uploadingStatus,
//         selectedStatus,
//         inputText,
//         dispatch,
//       }}
//     >
//       {children}
//     </TodoContext.Provider>
//   );
// }

// export { TodoContext, TodoContextProvider };
