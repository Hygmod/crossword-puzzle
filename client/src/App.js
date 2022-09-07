import React from "react"
import { useState, useEffect } from 'react'
import Todos from './components/Todos'
import Grid from './components/Grid'


function App() {

  // const [todos, setTodos] = useState([])

  // useEffect(() => {

  //   const fetchTodo = async () => {
  //     const res = await fetch('http://localhost:2121/')
  //     const data = await res.json()

  //     // console.log(data)
  //     setTodos(data)
  //   }
  //   fetchTodo()

  // }, [])

  return (
    <div className="App" id="app">
      <Grid />
    </div>
  );
}

export default App;
