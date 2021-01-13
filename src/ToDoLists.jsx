import React,{useState,useRef, useEffect} from "react";
const ToDoLists=(props)=>{
        
    const [task,setTask]= useState(props.text);
    const [update,setUpdate]= useState(false);
    const inputText = useRef('');

    const updateTask=(e)=>{  
        setTask(e.target.value);
    }

    useEffect(()=>{
        setTask(props.text);
    },[props.text])

    useEffect(()=>{
        inputText.current.focus();
    },[update])
    
    return(
    <div>
        <li>
            <input type="text" ref={inputText} onChange={updateTask}  value={task} disabled={!update}/> 
            
            <div>
                <button className="li-button" onClick={()=>{
                    props.deleteTodo(props.id)
                    }}>Delete </button>

            {!update &&
            <button className="li-button" onClick={()=>{
                setUpdate(true);
            }}>
            Update </button>
            }

            {update &&   
            (<button className="li-button" onClick={()=>{
                    setUpdate(false);
                    props.updateTodo(props.id,task)
                    }}>  Save Changes </button>
            )}
            </div>
        </li>
    </div>
    );
}
export default ToDoLists;