import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./todosSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text }));
    setIsEditing(false);
    setText(" ")
  };

  return (
    <li className="flex justify-between items-center mb-2">
      {isEditing ? (
        <>
          <input
            // type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;