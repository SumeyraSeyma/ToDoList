import React from 'react'
import { useState,useEffect } from 'react'

const initialFormValues = {title:''}

function Form({addTodos, todos}) {
    
    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    },[todos])

    

    const onChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.title === '') {
            alert('Enter something valid!');
            return false;
        }

        addTodos([...todos,form])

        
    }



  return (
    <form>
        
        <div>
        <textarea name='title'
        className='todo-input'
        value={form.title}
        style={{width:'50%', height:'60px'}} 
        placeholder='What needs to be done?'
        onChange={onChangeInput}
        onKeyDown={(e) => {
            if (e.key === 'Escape') {
                setForm(initialFormValues);
            }
            }}/>
        <button className='btn-form' onClick={onSubmit}>Add</button>
        </div>


    </form>
  )
}

export default Form