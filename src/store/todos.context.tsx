import React, { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (text: string) => {
    setTodos((prevTodo) => [new Todo(text), ...prevTodo]);
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleTodo,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
