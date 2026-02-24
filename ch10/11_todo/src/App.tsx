import "./App.css";
import InputSection from "./component/InputSection/InputSection";
import { Stats } from "./component/InputSection/Stats";
import TodoList from "./component/InputSection/TodoList";
import useTodo from "./model/todo_manager";

export default function App() {
  // 타이틀을 설정한다.
  document.title = "나만의 할 일 관리 앱";

  const todoManager = useTodo();

  return (
    <div className="app-container">
      <h1>📝 나만의 할 일 관리</h1>
      <InputSection todoManager={todoManager} />
      <TodoList todoManager={todoManager} />
      <Stats todoManager={todoManager} />
    </div>
  );
}
