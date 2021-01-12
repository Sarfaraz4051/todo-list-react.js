import './App.css';
import React,{useState} from "react";
import todo_logo from './images/logo.jpg'
import ToDoList from './ToDoLists'
class TodoImage extends React.Component{
  render(){
    return(
      <div className="todo-logo"> 
        <img  src={todo_logo}  alt="TODO-LOGO" width="50%"/>
      </div>
    );
  }
}


const AddTodo=()=>{

  const [taskName,setTaskName] = useState("");
  const [tasks,setTasks] = useState([]);
  
 
   //extracting previous todos after page refresh 
   
    let oldtodos = JSON.parse(localStorage.getItem('myTodos'));
    console.log('Old Todos are: ' +oldtodos);
     
    if(oldtodos.length!==0 && tasks.length===0)
    {  
      setTasks((oldTasks)=>{
        return [...oldtodos];
      })
    }
  
  
  
  const addTask=(e)=>{  
    setTaskName(e.target.value);
  }

  const deleteItem=(id)=>{

    //Deleting item from local storage array....
    let sametodo = JSON.parse(localStorage.getItem('myTodos'));
    sametodo.splice(id,1);
    localStorage.setItem('myTodos',JSON.stringify([...sametodo] ));

    setTasks((oldTasks)=>{
      return oldTasks.filter((arr,index)=>{
        return index!==id;
      })
      
    })
  }


  const addItem=(e)=>{ 
      e.preventDefault();
      
      setTasks( (oldTasks)=>{

        if(!oldTasks.includes( taskName.trim()  ) && taskName.trim().length>1 )
        {
          localStorage.setItem('myTodos',JSON.stringify([...oldTasks, taskName.trim()  ] ));          
          console.log('Array: '+localStorage.getItem('myTodos'));
          return [...oldTasks,taskName];
        }
        else{ 
          return [...oldTasks];
        }
        
      })  //setTasks State
      setTaskName('');
  }
 
  const updateItem=(id, val)=>{

    console.log('Updating: '+tasks[id]);

    let sametodoo = JSON.parse(localStorage.getItem('myTodos'));
    
    sametodoo.splice(id,1,val);
    console.log('local: '+sametodoo);
    localStorage.setItem('myTodos',JSON.stringify([...sametodoo] ));
    

  }

  return (
    <div className="main">
      <div> <h1>Add Task</h1> </div>
      <div>
          <input type="text" placeholder="Enter Task" value={taskName} className="input-text"  onChange={addTask}/> 
          <button onClick={addItem}> Add </button>      
      </div>
      
      <div>
        <ul>
          {tasks.map((task,index)=>{
            return <ToDoList key={index}
            text={task}
            id={index}
            deleteTodo={deleteItem}
            updateTodo={updateItem}
            />;
          })}
        </ul>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <TodoImage />
      <AddTodo />
    </div>
  );
}

export default App;