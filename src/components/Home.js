import React, { useEffect } from "react";
import "../App.css";

import Form from "./Form";
import TodoList from "./TodoList";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { filterCompleted, filterIncompleted, filterDefault } from '../reducers';


function Home() {
  const todos = useSelector(state => state.todos);
  const filteredTodos = useSelector(state => state.filteredTodos);
  const selectedStatus = useSelector(state => state.toggleStatus);
  const dispatch = useDispatch();

  const filterHandler = () => {
    switch (selectedStatus) {
      case "completed":
        dispatch(filterCompleted());
        break;

      case "uncompleted":
        dispatch(filterIncompleted());
        break;

      default:
        dispatch(filterDefault());
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, selectedStatus]);

  return (
    <div className="App">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact-us">Contact us</NavLink>
      <header>
        <h1>Gima's Todo List - Netlify</h1>
      </header>
      <Form
        todos={todos}
      />
      <TodoList
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default Home;
