import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
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
