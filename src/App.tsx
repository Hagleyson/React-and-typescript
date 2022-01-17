import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (text: string) => {
    setTodos((prevTodo) => [new Todo(text), ...prevTodo]);
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <NewTodo onAddTodo={handleTodo} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}>
        <h1>hagleyson</h1>
      </Todos>
    </div>
  );
}

export default App;
