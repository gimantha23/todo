import todoReducer from './todos';
import filteredTodosReducer from './filteredTodos';
import uploadStatusReducer from './uploadStatus';
import toggleStatusReducer from './toggleStatus';
import inputTextReducer from './inputText';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  todos: todoReducer,
  filteredTodos: filteredTodosReducer,
  uploadStatus: uploadStatusReducer,
  toggleStatus: toggleStatusReducer,
  inputText: inputTextReducer
})

export default allReducers;