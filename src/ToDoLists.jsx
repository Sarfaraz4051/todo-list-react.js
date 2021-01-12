import React from "react";
const ToDoLists=(props)=>{

    return( 
    <div>
        <li> 
            
            <h4 contentEditable="true" >{props.text}</h4>
            <div>
            <button className="li-button" onClick={()=>{
                props.deleteTodo(props.id)
                }}>Delete </button>


            <button className="li-button" onClick={()=>{
                props.updateTodo(props.id,props.text)
                }}>
                    
            Update </button>
            </div>
        </li>
    </div>
    );
}
export default ToDoLists;