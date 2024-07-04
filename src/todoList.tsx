// src/TodoList.tsx
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return <div></div>;
};

export default TodoList;
