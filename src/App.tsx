import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <React.Fragment>
      <Todos items={todos} />
    </React.Fragment>
  );
}

export default App;
