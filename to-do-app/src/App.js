import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);

  // ✅ Load data from localStorage when component first mounts
 
// ...existing code...
 useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodolist(JSON.parse(storedTodos));
    }
  }, []);


  // ✅ Save data to localStorage whenever todolist changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  const addChange = (e) => {
    setInput(e.target.value);
  };

  const addClick = () => {
    if (input.trim() === "") return;

    const item = {
      id: Date.now(), // better unique ID
      text: input.trim(),
      completed: false
    };
    setTodolist((prev) => [...prev, item]);
    setInput("");
  };

  const toggledCompleted = (id) => {
    setTodolist(
      todolist.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeButton = (id) => {
    setTodolist(todolist.filter((t) => t.id !== id));
  };

  return (
    <div className="div">
      <input
        value={input}
        className="text"
        type="text"
        placeholder="Write your task"
        onChange={addChange}
      />
      <button onClick={addClick}>Add Task</button>

      <ul>
        {todolist.map((t) => (
          <li key={t.id}>
            <input
              className="checkbox"
              type="checkbox"
              checked={t.completed}
              onChange={() => toggledCompleted(t.id)}
            />
            <span className={t.completed ? "linethrough" : ""}>{t.text}</span>
            <button onClick={() => removeButton(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
