import React,{useState} from "react";
const ToDoLists=(props)=>{
    
    
    
    const [task,setTask]= useState(props.text);
    
    
    const updateTask=(e)=>{  
        setTask(e.target.value);
    }
    
    return( 
    <div>
        <li>
            <input type="text" onChange={updateTask}  value={task}/> 
            
            <div>
            <button className="li-button" onClick={()=>{
                props.deleteTodo(props.id)
                }}>Delete </button>


            <button className="li-button" onClick={()=>{
                props.updateTodo(props.id,task)
                }}>
                    
            Update </button>
            </div>
        </li>
    </div>
    );
}
export default ToDoLists;