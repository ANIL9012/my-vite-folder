import React, { useEffect, useState } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

function TodoApp() {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  // Todo delete one by one
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curfilterTask) => curfilterTask !== value);
    setTask(updatedTask);
  };

  // Todo all Data Clear

  const handleCleareTodo = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>

          <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleDeleteTodo={handleDeleteTodo}
                />
              );
            })}
          </ul>
        </section>

        <section>
          <button className="clear-btn" onClick={handleCleareTodo}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
}

export default TodoApp;
