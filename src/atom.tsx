import { atom } from "recoil";

export interface Todo {
  id: number;
  content: string;
  isChecked: boolean;
  isEdited: boolean;
}

export const todosState = atom<Todo[]>({
  key: "todoState",
  default: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos")!)
    : [],
});

export const isTodoEditState = atom({
  key: "isTodoEditState",
  default: false,
});
