import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Todo, todosState } from "../../atom";

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  background-color: #1b9cfc;
`;

const Progress = styled.div`
  width: 100%;
  height: 15px;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 15px;
  background-color: #fff;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  width: ${(props) => `${100 * props.$progress}%`};
  height: inherit;
  background-color: #116fb8;
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
    <ProgressContainer>
      <Progress>
        <ProgressBar
          $progress={todos.length > 0 ? checkedTodos.length / todos.length : 0}
        />
      </Progress>
    </ProgressContainer>
  );
}

export default TodoProgress;
