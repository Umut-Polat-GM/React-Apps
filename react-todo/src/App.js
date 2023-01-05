import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState( 
      JSON.parse(localStorage.getItem("todos")) || []
    )

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <ToastContainer />
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
