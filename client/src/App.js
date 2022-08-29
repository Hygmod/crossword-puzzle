import React from "react"
import { useState, useEffect } from 'react'
import Todos from './components/Todos'
function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    const fetchTodo = async () => {
      const res = await fetch('http://localhost:2121/todos')
      const data = await res.json()

      // console.log(data)
      setTodos(data)
    }
    fetchTodo()

  }, [])




  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
