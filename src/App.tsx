import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
