// src/App.tsx
import React from "react";
import TodoList from "./todoList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Recoil To-Do List</h1>
      <TodoList />
    </div>
  );
};

export default App;
