import React, { memo, useCallback, useReducer, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentComponent from "./TypescriptProps/StudentComponent";
import Marks from "./TypescriptProps/Marks";
import Taks2 from "./TypescriptProps/Taks2";
import Counter from "./TypescriptProps/Counter";
type emailProps = {
  email: string;
};
type todosProps = {
  text: string;
};

function App() {
  const marks = [25, 40, 50, 80, 90];
  const books = [
    {
      id: 1,
      subjects: "hindi",
    },
    {
      id: 2,
      subjects: "English",
    },
    {
      id: 3,
      subjects: "Maths",
    },
    {
      id: 4,
      subjects: "Science",
    },
    {
      id: 4,
      subjects: "Computer",
    },
  ];
  const emailRef = useRef<HTMLInputElement>(null);
  const todosRef = useRef<HTMLInputElement>(null);
  const [stdEmail, setEmail] = useState<emailProps[]>([]);
  const [todosData, setTodos] = useState<todosProps[]>([]);
  // for student email input
  const submit = useCallback(() => {
    if (emailRef.current !== null) {
      let email = emailRef.current.value;
      if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        let obj = { email: email };
        stdEmail.push(obj);
        setEmail([...stdEmail]);
        emailRef.current.value = " ";
      } else {
        alert("please enter valid email");
      }
    }
  }, [stdEmail]);
  //for todos
  const todos = useCallback(() => {
    if (todosRef.current !== null) {
      let todo = todosRef.current.value;
      let obj = { text: todo };
      todosData.push(obj);
      setTodos([...todosData]);
      todosRef.current.value = " ";
    }
  }, [todosData]);
  return (
    <div className="App">
      <h3>Task1. Basic prop types</h3>
      <StudentComponent
        name="Rita Pal"
        age={21}
        quilified={true}
        gender="male"
      />
      <Marks
        marks={marks}
        inpref={emailRef}
        books={books}
        submitFun={submit}
        stdEmail={stdEmail}
      />
      <hr />
      <h3>Task2 :Typescript</h3>
      <Taks2 todosRef={todosRef} todosData={todosData} todos={todos} />
      <Counter />
    </div>
  );
}

export default memo(App);
