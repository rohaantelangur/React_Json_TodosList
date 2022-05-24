import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Todoitem } from "./Todoitem";

export const Todolist = (props) => {
  const [sort, setsort] = React.useState("");
  return (
    <>
      {props.todos
        .filter((item) => item.iscomplate === false)
        .map((item) => (
          <Todoitem
            key={uuidv4()}
            setsort={setsort}
            item={item}
            markascomplate={props.markascomplate}
            markasfev={props.markasfev}
            delatetodo={props.delatetodo}
          />
        ))}
      <div className="shwocom">SHOW COMPLETED TO-DOS</div>
      {props.todos
        .filter((item) => item.iscomplate === true)
        .map((item) => (
          <Todoitem
            key={uuidv4()}
            setsort={setsort}
            item={item}
            markascomplate={props.markascomplate}
            markasfev={props.markasfev}
            delatetodo={props.delatetodo}
          />
        ))}
    </>
  );
};
