import React, { memo } from "react";
type todosProps = {
  text: string;
};
type todosRefProps = {
  todosRef: React.RefObject<HTMLInputElement>;
  todosData: todosProps[];
  todos: () => void;
};
const Taks2 = (props: todosRefProps) => {
  console.log("Task2");
  return (
    <>
      <h4>Todos</h4>
      <div className="col-5 border m-auto p-4">
        <input ref={props.todosRef} />
        <button onClick={props.todos}>Add todo</button>
        {props.todosData.map((item) => {
          return (
            <>
              <p className="text-center">{item.text}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default memo(Taks2);
