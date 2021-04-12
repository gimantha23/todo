import React, {useEffect} from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  setUploadingStatus,
  uploadingStatus,
}) => {
  //write js code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => submitTodoHandler(), 4000);

  //     // this will clear Timeout
  //     // when component unmount like in willComponentUnmount
  //     // and show will not change to true
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   },
  //   []
  // );

   const submitTodoHandler = (e) => {
    setUploadingStatus(true);
    e.preventDefault();
    if (inputText === "") {
      alert("Cannot add Empty Strings");
    } else if (todos.length + 1 > 5) {
      alert("Cannot add more than 5 items");
    } else {
      const timeout = setTimeout(() => {
        setUploadingStatus(false);

        setTodos((prevTodos) => {
          if (!uploadingStatus) {
            return [...prevTodos];
            
          } else {
            clearTimeout(timeout);
            const newTodoState = {
              text: inputText,
              completed: false,
              id: Math.random() * 1000,
            };
            return [newTodoState, ...prevTodos];
          }
        });
        setInputText("");
      }, 4000);
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
