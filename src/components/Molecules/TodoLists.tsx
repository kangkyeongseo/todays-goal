import { useRecoilValue } from "recoil";
import { todosState } from "../../atom";
import TodoList from "./TodoList";
import { useTodoState } from "../../TodoContext";

function TodoLists() {
  const todos = useRecoilValue(todosState);
  const state = useTodoState();
  return (
    <ul>
      {state.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoLists;
