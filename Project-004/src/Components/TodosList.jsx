import { useState } from 'react'
import "../styles.css"

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // prevent empty tasks
    setTodos([...todos, task]);
    setTask(""); // clear input
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Todo List</h1>
      </div>

      <div className="tasks">
        <div className="input-field">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add Your Task"
            />
            <button type="submit" className="btn-addTask">Add Task</button>
          </form>
        </div>

        <ul className='todos-list'>
          {todos.map((item, index) => (
            <li className='todo' key={index}>
              <span>{item}</span>
              <button
                className="close"
                onClick={() => removeTodo(index)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodosList;
