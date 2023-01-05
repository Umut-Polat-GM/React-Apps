import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        // setTodos={setTodos}
      />
    </div>
  );
}

export default App;
