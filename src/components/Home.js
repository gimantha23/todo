import React, { useState, useContext, useEffect } from "react";
import "../App.css";

import Form from "./Form";
import TodoList from "./TodoList";
// import { TodoContext } from "./TodoContext";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { filterCompleted, filterIncompleted, filterDefault } from '../actions';


function Home() {
  const todos = useSelector(state => state.todos);
  const filteredTodos = useSelector(state => state.filteredTodos);
  const selectedStatus = useSelector(state => state.toggleStatus);
  // console.log(filteredTodos)
  const dispatch = useDispatch();

  const filterHandler = () => {
    let filtered = { ...todos };
    // console.log(filtered, "FFFFFFFFFFF")
    switch (selectedStatus) {
      case "completed":
        dispatch(filterCompleted(filtered));
        break;

      case "uncompleted":
        dispatch(filterIncompleted(filtered));
        break;

      default:
        dispatch(filterDefault(filtered));
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
        // inputText={inputText}
        todos={todos}
      // uploadingStatus={uploadingStatus}
      // dispatch={dispatch}
      />
      <TodoList
        // todos={todos}
        filteredTodos={filteredTodos}
      // deletingStatus={deletingStatus}
      // dispatch={dispatch}
      />
    </div>
  );
}

export default Home;
