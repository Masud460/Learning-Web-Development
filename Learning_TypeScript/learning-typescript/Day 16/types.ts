interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

type NewTodo = Omit<Todo, "id" | "createdAt">;

export { Todo, NewTodo };