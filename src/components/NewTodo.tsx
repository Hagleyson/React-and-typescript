import React, { useContext, useRef, FC } from "react";
import { TodosContext } from "../store/todos.context";
import styles from "./NewTodo.module.css";
const NewTodo: FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodosContext);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    ctx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button> Add Todo</button>
    </form>
  );
};
export default NewTodo;
