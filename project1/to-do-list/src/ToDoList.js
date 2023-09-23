import logo from './logo.svg';
import './App.css';



function ToDoList({ todos, setToDos }) {
    // Line Throught Logic
    function handleToggleTodo(todo) {
        const updatedToDos = todos.map((t) =>
            t.id === todo.id
            ? {
                ...t,
                done: !t.done
                }
            : t);
        setToDos(updatedToDos);
    }

    // HTML
    return (
      <ul>
        {todos.map((todo) => (
          <li onDoubleClick={() => handleToggleTodo(todo)} style={{textDecoration: todo.done ? "line-through" : ""}} 
            key={todo.id}>{todo.text}
            <DeleteTodo todo={todo} setToDos={setToDos}/>
          </li>
        ))}
      </ul>
    );
}

function DeleteTodo({ todo, setToDos }) {
    function handleDeleteTodo() {
      const confirmed = window.confirm("Do you want to delete this?");
      if (confirmed) {
        setToDos((prevTodos) => {
          return prevTodos.filter((t) => t.id !== todo.id);
        });
      }
    }
  
    return (
      <span
        onClick={handleDeleteTodo}
        role="button"
        style={{
          color: "red",
          fontWeight: "bold",
          marginLeft: 10,
          cursor: "pointer"
        }}
      >
        x
      </span>
    );
  }

export default ToDoList;
