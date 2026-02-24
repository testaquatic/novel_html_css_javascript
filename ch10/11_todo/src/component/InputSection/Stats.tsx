import { type TodoManager } from "../../model/todo_manager";

// 일정 정보를 출력한다.
export const Stats = ({
  todoManager: { updateStats },
}: {
  todoManager: TodoManager;
}) => {
  const { total, completed, remaining } = updateStats();
  return (
    <div id="stats">
      <div
        style={{
          marginTop: 20,
          padding: 15,
          background: "#e9ecef",
          borderRadius: 5,
        }}
      >
        <strong>현황: </strong> 전체 {total}개 | 완료 {completed}개 | 남은 일{" "}
        {remaining}개
      </div>
    </div>
  );
};
