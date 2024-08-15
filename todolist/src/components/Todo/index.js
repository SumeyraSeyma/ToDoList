
import Form from './Form'
import List from './List'
import React, { useEffect,useState } from 'react'

import './style.css'

function Todo() {
    const [todos, setTodos] = useState(()=>{
      // Local Storage'dan görevleri alıyoruz
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [
          { title: 'Learn React' },
          { title: 'Learn Firebase' },
          { title: 'Learn GraphQL' }
      ];
  });

    useEffect(() => {
        // Görevleri Local Storage'a kaydediyoruz
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos);
    }, [todos]);

  return (
    <div id='container'>
        <h1 className='hh'>To-Do</h1>
        <Form addTodos ={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos} />
        
    </div>

  )
}

export default Todo