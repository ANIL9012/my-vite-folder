
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
     <h1 className='text-center text-7xl text-white'>React Redux Todos</h1>

     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
