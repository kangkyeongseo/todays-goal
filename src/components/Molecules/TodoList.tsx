import { useState } from "react";
import { Todo, isTodoEditState, todosState } from "../../atom";
import Span from "../Atoms/Span";
import { useRecoilState } from "recoil";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

interface TodoListProp {
  todo: Todo;
}

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
    <li>
      {todo.isEdited ? (
        <>
          <Input type={"text"} inputValue={editTodo} onChange={onEditChange} />
          <Button buttonValue={"수정완료"} onClick={() => onEndEdit(todo)} />
        </>
      ) : (
        <>
          <Span text={todo.content} />
          <Button
            buttonValue={todo.isChecked ? "미완료하기" : "완료하기"}
            onClick={() => onCheckButtonClick(todo)}
            disabled={isTodoEdit}
          />
          <Button
            buttonValue={"수정하기"}
            onClick={() => onStartEdit(todo)}
            disabled={isTodoEdit}
          />
          <Button
            buttonValue={"삭제"}
            onClick={() => onDeleteButtonClick(todo.id)}
            disabled={isTodoEdit}
          />
        </>
      )}
    </li>
  );
}

export default TodoList;
