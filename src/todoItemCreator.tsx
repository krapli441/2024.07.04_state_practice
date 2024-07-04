// src/TodoItemCreator.tsx
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState, Todo } from "./state";

const TodoItemCreator: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    const newItem: Todo = {
      text: inputValue,
      isComplete: false,
    };

    setTodoList((oldTodoList) => [...oldTodoList, newItem]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
