import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

function TodoList({kye, data, checked, onHandleCheckedTodo, onHandleDeleteTodo}) {
  return (
    <>
      <li key={kye} className="todo-item">
        
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>

        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
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
