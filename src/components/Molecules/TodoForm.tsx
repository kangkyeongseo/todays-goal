import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { isTodoEditState, todosState } from "../../atom";
import { useTodoDispatch } from "../../TodoContext";

const Form = styled.form`
  display: grid;
  grid-template-columns: 5fr 1fr;
  height: 50px;
  input {
    color: white;
    background-color: #555;
  }
`;

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const setTodos = useSetRecoilState(todosState);
  const isTodoEdit = useRecoilValue(isTodoEditState);
  const dispatch = useTodoDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo.length > 0) {
      setTodos((pre) => [
        ...pre,
        { id: Date.now(), content: newTodo, isChecked: false, isEdited: false },
      ]);
    }
    setNewTodo("");
    dispatch({
      type: "ADD_TODO",
      todo: {
        id: Date.now(),
        content: newTodo,
        isChecked: false,
        isEdited: false,
      },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type={"string"} inputValue={newTodo} onChange={onChange} />
      <Button buttonValue={"추가하기"} disabled={isTodoEdit} />
    </Form>
  );
}

export default TodoForm;
