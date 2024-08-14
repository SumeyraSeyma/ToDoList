import React, { useEffect } from 'react'
import Form from './Form'
import List from './List'

function Todo() {
    const [todos, setTodos] = React.useState([{
        id: 1,
        title: 'Learn React',
 
    }, {
        id: 2,
        title: 'Learn Vue',

    }, {
        id: 3,
        title: 'Learn Angular',
 
    }])

    useEffect(() => {
        console.log( todos)
    }, [todos])

  return (
    <div>
        <h1>Todo</h1>
        <Form addTodos ={setTodos} todos={todos} />
        <List todos={todos} />
        
    </div>

  )
}

export default Todo