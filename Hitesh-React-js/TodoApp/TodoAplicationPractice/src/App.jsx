import './App.css'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
function App() {

  return (
    <>
    <div className='max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white'>
      <h1 className='text-2xl font-bold mb-4'>Redux Toolkit Todo</h1>
      <TodoForm/>
      <TodoList/>
    </div>
    </>
  )
}

export default App;
