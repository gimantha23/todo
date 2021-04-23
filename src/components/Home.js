import React, { useState, useContext, useEffect } from "react";
import "../App.css";

import Form from "./Form";
import TodoList from "./TodoList";
import { TodoContext } from "./TodoContext";
import { NavLink } from "react-router-dom";

function Home() {
  const {
    todos,
    filteredTodos,
    deletingStatus,
    uploadingStatus,
    selectedStatus,
    inputText,
    dispatch,
  } = useContext(TodoContext);

  const filterHandler = () => {
    let filtered = { ...todos };
    switch (selectedStatus) {
      case "completed":
        dispatch({
          type: "filter-completed",
          filtered: filtered,
        });
        break;

      case "uncompleted":
        dispatch({
          type: "filter-incompleted",
          filtered: filtered,
        });
        break;

      default:
        dispatch({
          type: "filter-default",
          filtered: filtered,
        });
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, selectedStatus]);

  return (
    <div className="App">
      <NavLink to="/about">About</NavLink>
      <header>
        <h1>Gima's Todo List - Netlify</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        uploadingStatus={uploadingStatus}
        dispatch={dispatch}
      />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        deletingStatus={deletingStatus}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Home;
