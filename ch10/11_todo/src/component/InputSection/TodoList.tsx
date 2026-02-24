import "./TodoList.css";

import { useCallback, useMemo } from "react";
import { type TodoManager } from "../../model/todo_manager";

// 일정 목록을 추가한다.
export const TodoList = ({
  todoManager: { todos, togleTodo, deleteTodo },
}: {
  todoManager: TodoManager;
}) => {
  const togleTodoHandler = useCallback(
    (id: number) => {
      togleTodo(id);
    },
    [todos, togleTodo],
  );
  const deleteTodoHandler = useCallback(
    (id: number) => {
      deleteTodo(id);
    },
    [todos, deleteTodo],
  );

  const todoList = useMemo(
    () =>
      todos.todos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          아직 할 일이 없습니다. 새로운 할일을 추가해보세요!
        </p>
      ) : (
        todos.todos.map((todo) => (
          <div
            className={`todo-item${todo.completed ? " completed" : ""}`}
            key={todo.id}
          >
            <span className="todo-text">{todo.text}</span>
            <div className="btn-group">
              <button
                className="btn btn-complete"
                onClick={() => togleTodoHandler(todo.id)}
              >
                <span className="btn-text">
                  {todo.completed ? "취소" : "완료"}
                </span>
              </button>
              <button
                className="btn btn-delete"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                <span className="btn-text">삭제</span>
              </button>
            </div>
          </div>
        ))
      ),
    [todos],
  );
  return <div id="todoList">{todoList}</div>;
};

export default TodoList;
