import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

function TodoList({kye, data, onHandleDeleteTodo}) {
  return (
    <>
      <li key={kye} className="todo-item">
        
        <span>{data}</span>

        <button className="check-btn">
          <MdCheck />
        </button>
        <button
          className="delete-btn"
          onClick={() => onHandleDeleteTodo(data)}
        >
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
}

export default TodoList;
