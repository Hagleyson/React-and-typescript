import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Lean TypeScript")];
  return (
    <div>
      <NewTodo />
      <Todos items={todos}>
        <h1>hagleyson</h1>
      </Todos>
    </div>
  );
}

export default App;
