// 입력 부분

import "./InputSection.css";
import { useCallback, useState } from "react";
import { type TodoManager } from "../../model/todo_manager";

// 일정을 입력 받아서 리스트에 추가한다.
export const InputSection = ({
  todoManager: { todos, addTodo },
}: {
  todoManager: TodoManager;
}) => {
  const [todo, setTodo] = useState<string | undefined>(undefined);
  const addTodoHandler = useCallback(
    (text: string) => addTodo(text),
    [todos, setTodo],
  );
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    },
    [setTodo],
  );

  return (
    <div className="input-section">
      <input
        type="text"
        id="todoInput"
        placeholder="할 일을 입력하세요..."
        onChange={(e) => changeHandler(e)}
        value={todo ?? ""}
      />
      <button id="addBtn" onClick={() => addTodoHandler(todo ?? "")}>
        추가
      </button>
    </div>
  );
};

export default InputSection;
