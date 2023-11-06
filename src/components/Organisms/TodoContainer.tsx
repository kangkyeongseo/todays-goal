import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isTodoEditState, todosState } from "../../atom";
import useLocalStorage from "../../libs/useLocalStorage";
import TodoForm from "../Molecules/TodoForm";
import TodoLists from "../Molecules/TodoLists";
import TodoProgress from "../Molecules/TodoProgress";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70px 50px auto;
`;

function TodoContainer() {
  const { setLocalStorage } = useLocalStorage({ key: "todos" });
  const todos = useRecoilValue(todosState);
  const isTodoEdit = useRecoilValue(isTodoEditState);

  useEffect(() => {
    if (!isTodoEdit) {
      setLocalStorage(todos);
    }
  }, [todos]);

  return (
    <Container>
      <TodoProgress />
      <TodoForm />
      <TodoLists />
    </Container>
  );
}

export default TodoContainer;
