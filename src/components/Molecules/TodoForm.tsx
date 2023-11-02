import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { isTodoEditState, todosState } from "../../atom";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const setTodos = useSetRecoilState(todosState);
  const isTodoEdit = useRecoilValue(isTodoEditState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos((pre) => [
      ...pre,
      { id: Date.now(), content: newTodo, isChecked: false, isEdited: false },
    ]);
    setNewTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Input type={"string"} inputValue={newTodo} onChange={onChange} />
      <Button buttonValue={"추가하기"} disabled={isTodoEdit} />
    </form>
  );
}

export default TodoForm;
