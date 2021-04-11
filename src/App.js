import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [uploadingStatus, setUploadingStatus] = useState(false);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //runs once app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));

      const newList =
        todoLocal &&
        todoLocal.map((todo) => {
          const updateddata = {
            ...todo,
            completed: !todo.completed,
          };
          return updateddata;
        });

      setTodos(newList);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Gima's Todo List - Netlify</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        setUploadingStatus={setUploadingStatus}
        uploadingStatus={uploadingStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
