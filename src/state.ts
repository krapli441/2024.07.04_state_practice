// src/state.ts
import { atom } from "recoil";

export interface Todo {
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
