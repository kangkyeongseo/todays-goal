import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Todo {
  id: number;
  todo: string;
  isChecked: boolean;
  isEdited: boolean;
}

const Main = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const TodosProgress = styled.div`
  width: 300px;
  height: 20px;
  border: 1px solid;
`;

const TodosProgressBar = styled.div<{
  totalTodos: number;
  checkedTodos: number;
}>`
  width: ${(props) =>
    props.totalTodos !== 0
      ? `${300 * (props.checkedTodos / props.totalTodos)}px`
      : "0px"};
  height: 20px;
  background-color: black;
  transition: all 1s ease-in-out;
`;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checkedTodos, setCheckedTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const onEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos((pre) => [
      ...pre,
      { id: Date.now(), todo: newTodo, isChecked: false, isEdited: false },
    ]);
    setNewTodo("");
  };

  const onCheckButtonClick = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onEditToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEdited = !todo.isEdited;
        setEditTodo(todo.todo);
      }
      return todo;
    });
    setTodos(newTodos);
    setIsEdit((pre) => !pre);
  };

  const onEditButtonClick = (id: number) => {
    onEditToggle(id);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.todo = editTodo;
      }
      return todo;
    });
  };

  const onDeleteButtonClick = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    const newCheckedTodos = todos.filter((todo) => todo.isChecked);
    setCheckedTodos(newCheckedTodos);
  }, [todos]);

  return (
    <Main>
      <TodosProgress>
        <TodosProgressBar
          totalTodos={todos.length}
          checkedTodos={checkedTodos.length}
        />
      </TodosProgress>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.isEdited ? (
              <>
                <input type="text" value={editTodo} onChange={onEditChange} />
                <button onClick={() => onEditButtonClick(todo.id)}>
                  수정완료
                </button>
              </>
            ) : (
              <>
                <span>{todo.todo}</span>
                <button
                  onClick={() => onCheckButtonClick(todo.id)}
                  disabled={isEdit}
                >
                  {todo.isChecked ? "미완료하기" : "완료하기"}
                </button>
                <button onClick={() => onEditToggle(todo.id)} disabled={isEdit}>
                  수정하기
                </button>
                <button
                  onClick={() => onDeleteButtonClick(todo.id)}
                  disabled={isEdit}
                >
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={newTodo} onChange={onChange} />
        <input type="submit" value={"추가하기"} />
      </form>
    </Main>
  );
}

export default App;
