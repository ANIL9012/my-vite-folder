import React, { useEffect, useState } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

function TodoApp() {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Todo delete one by one
 
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curfilterTask) => curfilterTask.content !== value);
    setTask(updatedTask);
  };

  // Todo all Data Clear

  const handleCleareTodo = () => {
    setTask([]);
  };

  // Todo handleCheckedTodo functionality

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if(curTask.content === content){
        return{...curTask, checked: !curTask.checked};
      }else{
        return curTask;
      }

    });
    setTask(updatedTask)
  }

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
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
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
