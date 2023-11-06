import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Todo, isTodoEditState, todosState } from "../../atom";
import Span from "../Atoms/Span";
import Input from "../Atoms/Input";
import CheckButton from "../Atoms/CheckButton";
import DeleteButton from "../Atoms/DeleteButton";
import EditButton from "../Atoms/EditButton";

interface TodoListProp {
  todo: Todo;
}

const TodoListContainer = styled.li<{ $isTodoEdit: boolean }>`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 20px;
  &:hover {
    background-color: ${(props) => !props.$isTodoEdit && "rgba(0,0,0,0.05)"};
  }
`;

function TodoList({ todo }: TodoListProp) {
  const [editTodo, setEditTodo] = useState("");
  const [isTodoEdit, setIsTodoEdit] = useRecoilState(isTodoEditState);
  const [todos, setTodos] = useRecoilState(todosState);

  const onEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value);
  };

  const onCheckButtonClick = (slectedTodo: Todo) => {
    const index = todos.findIndex((todo) => todo.id === slectedTodo.id);
    const newTodos = [
      ...todos.slice(0, index),
      { ...slectedTodo, isChecked: !slectedTodo.isChecked },
      ...todos.slice(index + 1, todos.length),
    ];
    setTodos(newTodos);
  };

  const onStartEdit = (slectedTodo: Todo) => {
    const index = todos.findIndex((todo) => todo.id === slectedTodo.id);
    const newTodos = [
      ...todos.slice(0, index),
      { ...slectedTodo, isEdited: !slectedTodo.isEdited },
      ...todos.slice(index + 1, todos.length),
    ];
    setTodos(newTodos);
    setEditTodo(slectedTodo.content);
    setIsTodoEdit((pre) => !pre);
  };

  const onEndEdit = (slectedTodo: Todo) => {
    const index = todos.findIndex((todo) => todo.id === slectedTodo.id);
    const newTodos = [
      ...todos.slice(0, index),
      { ...slectedTodo, content: editTodo, isEdited: !slectedTodo.isEdited },
      ...todos.slice(index + 1, todos.length),
    ];
    setTodos(newTodos);
    setIsTodoEdit((pre) => !pre);
  };

  const onDeleteButtonClick = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <TodoListContainer $isTodoEdit={isTodoEdit}>
      <CheckButton
        isChecked={todo.isChecked}
        onClick={() => onCheckButtonClick(todo)}
        disabled={isTodoEdit}
      />
      {todo.isEdited ? (
        <>
          <Input type={"text"} inputValue={editTodo} onChange={onEditChange} />
          <EditButton onClick={() => onEndEdit(todo)} />
        </>
      ) : (
        <>
          <Span text={todo.content} isChecked={todo.isChecked} />
          <EditButton onClick={() => onStartEdit(todo)} disabled={isTodoEdit} />
        </>
      )}

      <DeleteButton
        onClick={() => onDeleteButtonClick(todo.id)}
        disabled={isTodoEdit}
      />
    </TodoListContainer>
  );
}

export default TodoList;
