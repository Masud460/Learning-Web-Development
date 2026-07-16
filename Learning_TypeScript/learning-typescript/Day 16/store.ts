import { Todo, NewTodo } from "./types";

const todos: Todo[] = [];

function addTodo(input: NewTodo): Todo {
  const todo: Todo = {
    id: Date.now(),
    title: input.title,
    completed: false,
    createdAt: `${Date.now()}`,
  };
  todos.push(todo);
  return todo;
}

function removeTodo(id: number): void {
    todos.forEach((todo, index) => {
        if (id === todo.id) {
            todos.splice(index, 1)
        }
    })
}


function getTodos(): Readonly<Todo[]> {
    return todos;
}


addTodo({ title: 'Create an app', completed: false });
addTodo({ title: 'Create a software for the client', completed: false });
addTodo({ title: 'Create an employ manager', completed: false });


removeTodo(1780941210283);
console.log(getTodos())