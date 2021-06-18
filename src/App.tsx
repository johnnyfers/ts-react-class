import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos/index'
import { useState } from 'react'

interface Todo {
  id: string,
  text: string
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (id: string, text: string) => {

    const newTodo = {id, text}

    setTodos((prevTodos)=> {
      return prevTodos.concat(newTodo)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
