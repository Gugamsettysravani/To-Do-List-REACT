


import React, {  useState } from 'react'
import './App.css';

 


 
const App = () => {
  const [input,setInput]=useState("");
 const[todolist,setTodolist]=useState([]);

  const addChange=(e)=>{
     setInput(e.target.value);
 }
 const addClick=()=>{
  if(input.trim()==="") return;
  
  const item={
    id:todolist.length,
    text:input.trim(),
    completed:false
  }
  setTodolist(prev=>[...prev,item]);
  setInput("");
 }
const toggledCompleted=(id)=>{
  setTodolist(
    todolist.map(t=>{
    if(t.id===id){
      return{
        ...t,
        completed:!t.completed,
      }
    }else{
      return t;
    }
  })
  )
}
const removeButton=(id)=>{
setTodolist(
    todolist.filter(
      (t)=>(t.id!==id)
  )
)
}

  
  
  return (
    <div className='div'>

     <input value={input} className="text"type="text" placeholder='write your Task' onChange={addChange}/>
     <button onClick={()=>addClick()}> add task</button>

    <ul>
  {
    todolist.map((t) => (
      <li key={t.id}>
        <input  className="checkbox"type="checkbox" checked={t.completed}  onChange={()=>toggledCompleted(t.id)}/>
        <span className={t.completed?"linethrough":""}>{t.text}</span>
        <button onClick={()=>removeButton(t.id)}>remove</button>
      </li>
    ))
  }
</ul>
    
</div>
  )
}

export default App;