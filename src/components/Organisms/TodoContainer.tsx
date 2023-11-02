import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isTodoEditState, todosState } from "../../atom";
import useLocalStorage from "../../libs/useLocalStorage";
import TodoForm from "../Molecules/TodoForm";
import TodoLists from "../Molecules/TodoLists";
import TodoProgress from "../Molecules/TodoProgress";

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
    <div>
      <TodoProgress />
      <TodoLists />
      <TodoForm />
    </div>
  );
}

export default TodoContainer;
