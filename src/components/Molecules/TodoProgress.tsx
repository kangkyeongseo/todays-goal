import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Todo, todosState } from "../../atom";

const Progress = styled.div`
  width: 300px;
  height: 20px;
  border: 1px solid;
`;

const ProgressBar = styled.div`
  height: 20px;
  background-color: black;
  transition: all 1s ease-in-out;
`;

function TodoProgress() {
  const [checkedTodos, setCheckedTodos] = useState<Todo[]>([]);
  const todos = useRecoilValue(todosState);

  useEffect(() => {
    const newCheckedTodos = todos.filter((todo) => todo.isChecked);
    setCheckedTodos(newCheckedTodos);
  }, [todos]);
  return (
    <Progress>
      <ProgressBar
        style={{
          width:
            todos.length !== 0
              ? `${300 * (checkedTodos.length / todos.length)}px`
              : "0px",
        }}
      />
    </Progress>
  );
}

export default TodoProgress;
