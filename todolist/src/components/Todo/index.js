
import Form from './Form'
import List from './List'
import React, { useEffect,useState } from 'react'

import './style.css'

function Todo() {
    const [todos, setTodos] = useState([
        {title: 'Learn React'},
        {title: 'Learn Firebase'},
        {title: 'Learn GraphQL'}
 
    ])

    useEffect(() => {
        console.log( todos)
    }, [todos])

  return (
    <div id='container'>
        <h1>Todos</h1>
        <Form addTodos ={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos} />
        
    </div>

  )
}

export default Todo