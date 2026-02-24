import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

export type Student = {
  name: string;
  score: number;
};

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type StudentListProps = DivProps & { students: Student[] };

export default function StudentList({ students, ...props }: StudentListProps) {
  return (
    <div {...props}>
      {students.map(({ name, score }) => (
        <Student
          name={name}
          score={score}
          key={name}
          className={["student-card", score >= 90 ? "high-score" : ""]
            .map((className) => className.trim())
            .join(" ")}
          style={score >= 90 ? { backgroundColor: "#e9f5e8" } : {}}
        />
      ))}
    </div>
  );
}

export type StudentProps = DivProps & Student;

export function Student({ name, score, style, ...props }: StudentProps) {
  const sytle: CSSProperties = {
    border: "1px solid #ddd",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    ...style,
  };
  return (
    <div style={sytle} {...props}>
      <h3>{name}</h3>
      <p>점수: {score}</p>
      <p>등급: {getGrade(score)}</p>
    </div>
  );
}

const getGrade = (score: number) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "D";
  }
};
