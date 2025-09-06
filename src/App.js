import './App.css'
import {useState} from 'react'

function App() {

  const [todolist, setTodolist]=useState([])
  const saveToDoList=(e)=>{
    let toname=e.target.toname.value;
    if(!todolist.includes(toname)){
      let finalList=[...todolist, toname];
      setTodolist(finalList)
    }
    else{ 
      alert("Already stored to-do list")
    }
    e.preventDefault()
  }

  let list=todolist.map((value, index)=>{
    return(
      <TodolistItems value={value} key={index} indexNumber={index} 
      todolist={todolist} 
      setTodolist={setTodolist}/>
    )
  })
  return (
    <>
      <div className="app">
        <h1>To-do List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='toname' placeholder="Enter todo name"/>
          <button>Save</button>
        </form>
      </div>

      <div className="listdata">
        <ul>
        {list}
        </ul>
      </div>
    </>
  );
}
export default App;

function TodolistItems({value, key, indexNumber, todolist,setTodolist}){

  let deleteRow=()=>{
   let finalData=todolist.filter((v, i)=> i!==indexNumber);
   setTodolist(finalData)
  }
return(
  <li>{value} <span onClick={deleteRow}>&times;</span></li>
)
}
