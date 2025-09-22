import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todos/todosSlice";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          value={text}
          className="border flex flex-grow mr-2"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo...."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
