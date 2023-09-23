import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import React from "react";

// Main Component
function App() {
  const [todos, setToDos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  // HTML
  return (
    <div>

      <h1>Todo List</h1>
      <AddTodo setToDos={setToDos}/>
      <ToDoList todos={todos} setToDos={setToDos}/>
    </div>
  );
}

// AddToDo Component
function AddTodo({setToDos}) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    setToDos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  // HTML
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}


export default App;

