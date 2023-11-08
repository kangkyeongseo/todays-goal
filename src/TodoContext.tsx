import React, {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Todo } from "./atom";
import { func } from "prop-types";

interface ActionType {
  type: string;
  todo: Todo;
}

const TodoStateConText = createContext<Todo[]>([]);
const TodoDispatchConText = createContext<React.Dispatch<ActionType>>(() => {});

function reducer(state: Todo[], action: ActionType) {
  switch (action.type) {
    case "ADD_TODO":
      state.push(action.todo);
      return state;
    case "Delete_TODO":
      return state.filter((prev) => prev.id !== action.todo.id);
    default:
      throw new Error();
  }
}

function TodoContext({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <TodoStateConText.Provider value={state}>
      <TodoDispatchConText.Provider value={dispatch}>
        {children}
      </TodoDispatchConText.Provider>
    </TodoStateConText.Provider>
  );
}

export default TodoContext;

export function useTodoState() {
  const state = useContext(TodoStateConText);
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchConText);
  return dispatch;
}
