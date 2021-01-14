

export const getLocalStorageData=()=>{
    
    return JSON.parse(localStorage.getItem('myTodos'));
    
}

export const setLocalStorageData=(tasks)=>{
    localStorage.setItem('myTodos',JSON.stringify([...tasks] ));
    
}
