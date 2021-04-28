import React, { useRef, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { submitTodo, SetinputText, uploadStatus, toggleStatus } from '../actions';

const Form = () => {

  const todos = useSelector(state => state.todos);
  const inputText = useSelector(state => state.inputText);
  const uploadingStatus = useSelector(state => state.uploadStatus);
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    dispatch(SetinputText(e.target.value)); //payload: e.target.value
  };
  var timerIdRef = useRef(0);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Cannot add Empty Strings");
    } else if (todos.length + 1 > 5) {
      alert("Cannot add more than 5 items");
    } else {
      dispatch(uploadStatus(false)); //payload:true
      dispatch(SetinputText("")); //payload:""
      clearTimeout(timerIdRef.current);
      timerIdRef.current = setTimeout(() => {
        dispatch(uploadStatus(true)); //payload : false
        const newTodo = {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        };
        dispatch(submitTodo(newTodo)); //payload: newTodo
      }, 1000);
    }
  };

  const statusHandler = (e) => {
    dispatch(toggleStatus(e.target.value)); //payload: e.target.value
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      {uploadingStatus && <p>In progress...</p>}
    </form>
  );
};

export default Form;
