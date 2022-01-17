import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Lean TypeScript")];
  return (
    <div>
      <Todos items={todos}>
        <h1>hagleyson</h1>
      </Todos>
    </div>
  );
}

export default App;
