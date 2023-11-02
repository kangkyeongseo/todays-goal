import { useRecoilValue } from "recoil";
import { todosState } from "../../atom";
import TodoList from "./TodoList";

function TodoLists() {
  const todos = useRecoilValue(todosState);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoLists;
