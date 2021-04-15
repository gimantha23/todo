import React from "react";

var timer;
let queue = 0;

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  setUploadingStatus,
  uploadingStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  timer = () =>
    setTimeout((timer) => {
      
      if (queue > 1) {
        queue--;
        return;
      }
      setUploadingStatus(false);
      setInputText("");

      setTodos((prevTodos) => {
        const newTodoState = {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        };
        queue = 0;
        return [newTodoState, ...prevTodos];
      });
    }, 2500);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Cannot add Empty Strings");
    } else if (todos.length + 1 > 5) {
      alert("Cannot add more than 5 items");
    } else {
      queue++;
      setUploadingStatus(true);
      clearTimeout(timer);
      timer();
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
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
