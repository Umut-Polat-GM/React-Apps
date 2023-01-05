import React from 'react'
import {useState, useEffect} from "react"

const TodoForm = ({todos, setTodos}) => {
    const [todoValue, setTodoValue] = useState('')
    const inputText =document.getElementById('form-input')

    const handleSubmit = () => {
        if(inputText.value !==""){
            setTodos([ todoValue, ...todos ])
        }
        setTodoValue('')
        inputText.value =""
    }
    
  return (
    <form action='' id='todo-form'>
        <input type="text" 
        id='form-input'
        placeholder='Please Enter Your Todo'
        value={todoValue}
        onChange={(e) => {
            setTodoValue(e.target.value)
        }}
        />
        <button onClick={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <i className='fas fa-plus'></i>
        </button>
    </form>
  )
}

export default TodoForm
