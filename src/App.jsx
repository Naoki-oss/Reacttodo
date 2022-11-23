import React from "react";
import "./styles.css";
import { useState } from "react";
import InputTodo from "./components/input";
import Incomplete from "./components/incompleteTodos";
import Incomp from "./components/comp";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const plusOnClink = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const deleteOnclick = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    // newTodos.filter(index === incompleteTodos);
    setIncompleteTodos(newTodos);
  };

  const compOnclick = (index) => {
    const newsInTodos = [...incompleteTodos];
    newsInTodos.splice(index, 1);

    const newComp = [...completeTodos, incompleteTodos[index]];
    // 今の完了todoと未完了から切り取られた配列を合体して新しい配列として定義する

    setIncompleteTodos(newsInTodos);
    setCompleteTodos(newComp);
  };

  const backOnclick = (index) => {
    const newsInTodos = [...completeTodos];
    newsInTodos.splice(index, 1);

    const newsComp = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newsComp);
    setCompleteTodos(newsInTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        plusOnClink={plusOnClink}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}
      <Incomplete
        todos={incompleteTodos}
        deleteOnclick={deleteOnclick}
        compOnclick={compOnclick}
      />
      <Incomp backOnclick={backOnclick} todos={completeTodos} />
    </>
  );
};
