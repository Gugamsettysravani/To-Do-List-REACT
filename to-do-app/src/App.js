
// import './App.css';
// import { useState } from 'react';
// import { v4 as uuid} from 'uuid';
// function App() {
//   const[todo,setTodo]=useState();
//   const[todolist,setTodolist]=useState([]);
//   const onSearchChange=(e)=>{
//      setTodo(e.target.value);
//   }
 
//   const onAddClickChange=()=>{
//     setTodolist([...todo,{id:uuid(),todo:todo,isCompleted:false}]);
//     setTodo("");
//   }

//   const onDeleteChange=(id)=>{
//    const deletedlist=todolist.filter(todo=>todo.id!==0);
//    setTodolist(deletedlist);
//   }
//   const onUpdateChange=(id)=>{
// //  const updateList=todolist.map(todo=>todo.id===id ?{...todo.isCompleted:!todo.isCompleted} :todo);
// //   }
//   return (

//     <div className='App'>
//       <div>
//         <input value={todo} onChange={onSearchChange}type="text" placeholder='Enter your Task'/>
//         <button onClick={onAddClickChange}> Add your list  </button>
        
//       </div>
    
//      {
//           todolist && todolist.length>0 && todolist.map((todo)=>{

//            <div key={todo.id}>
//               <label>
//                 <input onClick={()=>onUpdateChange(id)}type='checkbox'/>
//                 <span>{todo.todo}</span>
//               </label>
//               <button onClick={()=>onDeleteChange(todo.id)}>delete your task</button>
//             </div>



//           })

//       }
      
          
        
     
      


//     </div>
  
//   )
// };

// export default App;
  
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder="Enter a task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;