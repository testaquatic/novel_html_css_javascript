import { useState } from "react";
import StudentList, { Student } from "./StudentList";
import Title from "./Title";

export default function App() {
  const students: Student[] = [
    { name: "김철수", score: 85 },
    { name: "이영희", score: 92 },
    { name: "박민수", score: 78 },
    { name: "정수진", score: 96 },
  ];

  const [studentList, setStudentsList] = useState<Student[]>(students);

  return (
    <>
      <Title>화살표 함수 응용</Title>
      <h1>학생 성적 관리 시스템</h1>
      <StudentList className="student-list" students={studentList} />
      <button
        onClick={() => {
          setStudentsList(
            studentList.map((student) => ({
              ...student,
              score: Math.min(student.score + 5, 100),
            })),
          );
        }}
      >
        모든 학생에게 5점 추가
      </button>
    </>
  );
}
