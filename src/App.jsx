import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  };
  return (
    <div className="todo">
      <div className="container">
        <div className="todo__inner">
          <h1>Какие планы на сегодня?</h1>
          <ToDoForm addTask={addTask} />
          <p>Всего задач: {todos.length}</p>
          {todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
