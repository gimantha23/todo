import React, { useRef, useContext } from "react";

const Form = ({
  todos,
  inputText,
  uploadingStatus,
  dispatch,
}) => {
  const inputTextHandler = (e) => {
    dispatch({
      type: "text-input",
      payload: e.target.value,
      submitStatus: true,
    });
  };
  var timerIdRef = useRef(0);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Cannot add Empty Strings");
    } else if (todos.length + 1 > 5) {
      alert("Cannot add more than 5 items");
    } else {
      dispatch({ type: "text-input", payload: "", submitStatus: true });
      clearTimeout(timerIdRef.current);
      timerIdRef.current = setTimeout(() => {
        dispatch({ type: "text-input", payload: "", submitStatus: false });
        const newTodo = {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        };
        dispatch({
          type: "submit-todos",
          payload: newTodo,
        });
      }, 1000);
    }
  };

  const statusHandler = (e) => {
    dispatch({ type: "toggle-status", payload: e.target.value });
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
