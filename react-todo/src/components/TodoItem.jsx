import React, { useState } from 'react'
import {toast} from 'react-toastify'

const TodoItem = ({todo:{text,id}, deleteTodo}) => {
    
    const [state, setState ] = useState()

    const changeState = () => {
        setState(prev => !prev)
    }

    return (
      <div  className={state ? 'todo-item-done' : 'todo-item'}>
          <div className='text-item'>
            <p >{text}</p>
          </div>
          
          <div className='icon'>
            <i 
                className="fa-sharp fa-solid fa-check"
                onClick={() => {
                    changeState()
                }}
                
            ></i>
            <i 
                className="fa-sharp fa-solid fa-trash" 
                onClick={() => {
                    deleteTodo(id)
                    toast.error("Deleted")
                }}
            ></i>
          </div>
      </div>
    )
  }

export default TodoItem