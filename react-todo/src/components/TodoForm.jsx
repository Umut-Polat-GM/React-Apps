import React from 'react'
import {useState} from "react"
import {toast} from 'react-toastify'
import { nanoid } from 'nanoid'

const TodoForm = ({todos, setTodos}) => {
    const [todoValue, setTodoValue] = useState('')

    const handleSubmit = () => {
        if(todoValue === ""){
            toast.warning('Please Enter a Todo!')
        }else if(todos.includes(todoValue)){
            toast.warning('Todo already exist!')
        }else {
            const newTodo = todoValue.trim()
            setTodos([...todos, {text:newTodo, id:nanoid()}])
            toast.success('Todo added!')
            setTodoValue('')
        }
    }
    
  return (
    <form action='' id='todo-form'>
        <input 
            type="text" 
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
