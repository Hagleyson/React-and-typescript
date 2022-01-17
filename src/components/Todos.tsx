import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
//item?: string[]. ?===optional
//another way to create the component with typescript
// export default function Todos(props: { item: string[],children: }) {
//   return <ul>{props.children}</ul>;
// }
export default Todos;
