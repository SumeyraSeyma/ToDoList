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
            return false;
        }

        addTodos([...todos,form])

        
    }



  return (
    <form>
        
        <div>
        <input name='title'
        value={form.title} 
        placeholder='What needs to be done?'
        onChange={onChangeInput} />
        <button onClick={onSubmit}>Add</button>
        </div>


    </form>
  )
}

export default Form