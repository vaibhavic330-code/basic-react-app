import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone:false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone:false }];
    });
    setNewTodo("");
  };

  let updaTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        // task: todo.task.toUpperCase(),
        isDone: true
      }))
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updaTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecoration: "line-through", color: "gray" }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>

      <button onClick={markAllDone}>mark All as Done</button>
    </div>
  );
}
