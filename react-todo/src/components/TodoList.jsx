import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo}) => {
  console.log(todos)
  return (
    <div className="todo-container">
        {
            // todos.map((todo) => (
            //     <TodoItem 
            //         key={todo.id} 
            //         todo={todo.text} 
            //         deleteTodo={deleteTodo} 
            //     />
            // ))
            todos.map((todo)=>
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo} 
              />
            )
        }
    </div>
  )
}

export default TodoList
