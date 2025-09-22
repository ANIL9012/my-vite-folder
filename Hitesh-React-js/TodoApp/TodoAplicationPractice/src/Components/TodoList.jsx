import { useSelector } from 'react-redux';
import TodoItem from '../Features/Todos/TodoItem';


function TodoList() {

    const todos = useSelector((state) => state.todos.items);

  return (
    <>
      <ul>
        {
            todos.length === 0 ? (

                <p>No todo yet...</p>
            ):(
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )
        }
      </ul>
    </>
  );
}

export default TodoList;
