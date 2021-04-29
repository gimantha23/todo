import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: {},
  filteredTodos: {},
  inputText: "",
  deleteStatus: false,
  toggleStatus: "all",
  uploadStatus: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    submitTodo: (state, action) => {
      state.todos = {
        ...state.todos,
        [action.payload.id]: action.payload,
      };
    },
    toggleTodo: (state, action) => {
      state.todos = {
        ...state.todos,
        [action.payload]: {
          ...state.todos[action.payload],
          completed: !state.todos[action.payload]["completed"],
        },
      };
    },
    filterCompleted: (state, action) => {
      let filtered = { ...state.todos };
      Object.keys(state.todos).forEach((todo) => {
        if (!state.todos[todo].completed) {
          delete filtered[todo];
        }
      });
      state.filteredTodos = filtered;
    },
    filterIncompleted: (state, action) => {
      let filtered = { ...state.todos };
      Object.keys(state.todos).forEach((todo) => {
        if (state.todos[todo].completed) {
          delete filtered[todo];
        }
      });
      state.filteredTodos = filtered;
    },
    filterDefault: (state, action) => {
      state.filteredTodos = {...state.todos};
    },
    SetinputText: (state, action) => {
      state.inputText = action.payload;
    },
    uploadStatus: (state, action) => {
      state.uploadStatus = action.payload;
    },
    deleteStatus: (state, action) => {
      state.deleteStatus = action.payload;
    },
    toggleStatus: (state, action) => {
      state.toggleStatus = action.payload;
    },
    deleteTodos: (state, action) => {
      const { [action.payload]: remove, ...rest } = state.todos;
      state.todos = { ...rest };
    },
  },
});
export const {
  submitTodo,
  toggleTodo,
  filterCompleted,
  filterIncompleted,
  filterDefault,
  SetinputText,
  uploadStatus,
  deleteStatus,
  toggleStatus,
  deleteTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
