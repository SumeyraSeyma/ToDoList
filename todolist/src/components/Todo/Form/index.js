import React from 'react'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'


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
            toast.error('Please enter a todo', {
                position: "top-center",
                autoClose: 2000,
                closeOnClick: true,
            })
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