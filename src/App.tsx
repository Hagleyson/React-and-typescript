import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (text: string) => {
    setTodos((prevState) => [new Todo(text), ...prevState]);
  };
  return (
    <div>
      <NewTodo onAddTodo={handleTodo} />
      <Todos items={todos}>
        <h1>hagleyson</h1>
      </Todos>
    </div>
  );
}

export default App;
