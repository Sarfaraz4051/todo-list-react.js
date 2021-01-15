export const getLocalStorageData=(key)=>{    
    return JSON.parse(localStorage.getItem(key));
}

export const setLocalStorageData=(key,tasks)=>{
    localStorage.setItem(key,JSON.stringify([...tasks] ));
}
