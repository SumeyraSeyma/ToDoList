import React, { useEffect } from 'react'
import Form from './Form'
import List from './List'

function Todo() {
    const [todos, setTodos] = React.useState([
        {title: 'Learn React'},
        {title: 'Learn Firebase'},
        {title: 'Learn GraphQL'}
 
    ])

    useEffect(() => {
        console.log( todos)
    }, [todos])

  return (
    <div>
        <h1>Todo</h1>
        <Form addTodos ={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos} />
        
    </div>

  )
}

export default Todo