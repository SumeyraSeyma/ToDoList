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

        if (form.title.trim() === '') {
            toast.error('Please enter a todo', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
            });
            return;
        }

        addTodos([...todos, form]);

            toast.success('Todo added', {
            position: 'bottom-right',
            autoClose: 2000,
            closeOnClick: true,
        });
    
            setForm(initialFormValues);
};





  return (
    <form onSubmit={onSubmit}>
        
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
        <button className='btn-form' type='submit'>Add</button>
        </div>


    </form>
  )
}

export default Form