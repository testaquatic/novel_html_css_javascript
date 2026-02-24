import { useMemo, useState } from "react";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoManager = ReturnType<typeof useTodo>;

const useTodo = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("myTodos");
    let todos = [] as Todo[];
    let nextId = 0;

    if (saved) {
      const { todos: todosFromStorage, nextId: nextIdFromStorage } =
        JSON.parse(saved);
      todos = todosFromStorage ?? [];
      nextId = nextIdFromStorage ?? 0;

      todos.forEach((todo) => {
        todo.createdAt = new Date(todo.createdAt);
      });
    }

    return {
      // 일정 목록
      todos,
      // 다음 일정 id
      nextId,

      // 새로운 할일을 추가한다.
      // 성공하면 true, 실패하면 false를 반환한다.
      addTodo(text: string) {
        if (!text || text.trim().length === 0) {
          alert("할 일을 입력해주세요!");
          return false;
        }

        const newTodo = {
          id: this.nextId,
          text: text.trim(),
          completed: false,
          createdAt: new Date(),
        };

        this.todos.push(newTodo);
        this.nextId++;

        this.saveToStroage();

        return true;
      },

      // 완료와 미완료를 변경한다.
      togleTodo(id: number) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }

        this.saveToStroage();
      },

      // 할 일을 삭제한다.
      deleteTodo(id: number) {
        if (confirm("정말로 삭제하시겠습니까?")) {
          this.todos = this.todos.filter((todo) => todo.id !== id);
        }

        this.saveToStroage();
      },

      // 통계 정보 업데이트
      // {total, completed, remaining}을 반환한다.
      updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter((todo) => todo.completed).length;
        const remaining = total - completed;

        return { total, completed, remaining };
      },

      // 객체를 로컬 스토리지에 저장한다.
      saveToStroage() {
        localStorage.setItem(
          "myTodos",
          JSON.stringify({ todos: this.todos, nextId: this.nextId }),
        );
      },

      // 객체를 로컬 스토리지에서 불러온다.
      loadFromStroage() {
        const saved = localStorage.getItem("myTodos");
        if (saved) {
          const { todos, nextId } = JSON.parse(saved);
          this.todos = todos || [];
          this.nextId = nextId || 1;

          this.todos.forEach((todo) => {
            todo.createdAt = new Date(todo.createdAt);
          });
        }
      },
    };
  });

  const addTodo = (text: string) => {
    setTodos((prev) => {
      prev.addTodo(text);
      console.log(prev);

      return { ...prev };
    });
  };

  const togleTodo = (id: number) => {
    setTodos((prev) => {
      prev.togleTodo(id);
      return { ...prev };
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => {
      prev.deleteTodo(id);
      return { ...prev };
    });
  };

  const updateStats = () => {
    const [stats, setStats] = useState(() => {
      return todos.updateStats();
    });

    useMemo(() => {
      setStats(() => todos.updateStats());
    }, [todos]);

    return stats;
  };

  return { todos, addTodo, togleTodo, deleteTodo, updateStats };
};

export default useTodo;
