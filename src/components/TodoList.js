import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Todo from "./Todo";
import { toggleTodo, deleteTodos } from '../actions';

const TodoList = ({
  deletingStatus,
}) => {
  var deleteTimerIdRef = useRef(0);

  const filteredTodos = useSelector(state => state.filteredTodos);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  console.log(todos, "PPPPPPPPPPPP")

  const onDeleteHandler = (deletedTodoID) => {
    dispatch(deleteTodos(null, true)); //id:null, deleteStatus: true
    clearTimeout(deleteTimerIdRef.current);
    deleteTimerIdRef.current = setTimeout(() => {
      dispatch(deleteTodos(deletedTodoID)); //id:deletedTodoID, deleteStatus: false
    }, 1000);
  };

  const onCompleteHandler = (toggledTodoID) => {
    dispatch(toggleTodo(toggledTodoID)); //id:toggledTodoID
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Object.values(filteredTodos).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            text={todo.text}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}

        {deletingStatus && <p>Deleting In progress...</p>}
        <p>
          <b>Total items: {Object.keys(filteredTodos).length}</b>
          <br />
        </p>
      </ul>
    </div>
  );
};

export default TodoList;
