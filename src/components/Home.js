import React, { useState, useContext, useEffect } from "react";
import "../App.css";

import Form from "./Form";
import TodoList from "./TodoList";
import { TodoContext } from "./TodoContext";
import { NavLink } from "react-router-dom";

function Home() {
  //context
  const { todos, setFilteredTodos } = useContext(TodoContext);

  const [inputText, setInputText] = useState("");
  //   const [todos, setTodos] = useState({});
  const [status, setStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState({});
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [deletingStatus, setDeletingStatus] = useState(false);

  const filterHandler = () => {
    let filtered = { ...todos };
    switch (status) {
      case "completed":
        Object.keys(todos).forEach((todo) => {
          if (!todos[todo].completed) {
            delete filtered[todo];
          }
        });
        setFilteredTodos(filtered);
        break;

      case "uncompleted":
        Object.keys(todos).forEach((todo) => {
          if (todos[todo].completed) {
            delete filtered[todo];
          }
        });
        setFilteredTodos(filtered);
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //runs once app starts
  //   useEffect(() => {
  //     // getLocalTodos();
  //   }, []);

  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);

  //   const saveLocalTodos = () => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   };

  //   const getLocalTodos = () => {
  //     if (localStorage.getItem("todos") === null) {
  //       localStorage.setItem("todos", JSON.stringify({}));
  //     } else {
  //       let todoLocal = JSON.parse(localStorage.getItem("todos"));

  //       const newList =
  //         todoLocal &&
  //         Object.values(todoLocal).map((todo) => {
  //           const updateddata = {
  //             ...todo,
  //             completed: !todo.completed,
  //           };
  //           return {...updateddata};
  //         });

  //       setTodos(newList);
  //     }
  //   };

  return (
    <div className="App">
      <NavLink to="/about">About</NavLink>
      <header>
        <h1>Gima's Todo List - Netlify</h1>
      </header>
      <Form
        inputText={inputText}
        // todos={todos}
        // setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        setUploadingStatus={setUploadingStatus}
        uploadingStatus={uploadingStatus}
      />
      <TodoList
        // setTodos={setTodos}
        // todos={todos}
        // filteredTodos={filteredTodos}
        deletingStatus={deletingStatus}
        setDeletingStatus={setDeletingStatus}
      />
    </div>
  );
}

export default Home;
