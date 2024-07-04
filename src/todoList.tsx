// src/TodoList.tsx
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todo, index) => (
        <TodoItem key={index} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
