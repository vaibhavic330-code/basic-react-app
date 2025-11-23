import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updaTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
  };
   
  let upperCaseAll = () =>{
    setTodos( (prevTodos) => (
    prevTodos.map((todo)=>{
        return{
         ...todo,
         task: todo.task.toUpperCase(),
        };
        // console.log(newArr);
    })
   )
  )};


  let UpperCaseOne = (id) =>{
    setTodos( (prevTodos) => (
     prevTodos.map((todo)=>{
        if(todo.id == id){
         return{
         ...todo,
         task: todo.task.toUpperCase(),
        };
        }else{
         return todo;
        }
       
        // console.log(newArr);
    })
   )
  )}
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
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
             <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
