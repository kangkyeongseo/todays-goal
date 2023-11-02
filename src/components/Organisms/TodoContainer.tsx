import TodoForm from "../Molecules/TodoForm";
import TodoLists from "../Molecules/TodoLists";
import TodoProgress from "../Molecules/TodoProgress";

function TodoContainer() {
  return (
    <div>
      <TodoProgress />
      <TodoLists />
      <TodoForm />
    </div>
  );
}

export default TodoContainer;
