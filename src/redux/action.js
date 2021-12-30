import { ADD_TASK, 
    DELETE_TASK,CHECK_TASK, 
    CHANGE_THEME ,
    UPDATE_TASK,
} from "./type"


const addTask=(task)=>{
    
    return {
        type:ADD_TASK,
        payload:task
    }
}

const updateTask=(task)=>{
    return {
        type:UPDATE_TASK,
        payload:task
    }
}

const changeTheme=(theme)=>{
    return{
        type:CHANGE_THEME,
        payload:theme
    }
}

const checkTask=(id)=>{
    return{
        type:CHECK_TASK,
        payload:id
    }
}

const deleteTask=(id)=>{
    return {
        type:DELETE_TASK,
        payload:id
    }
}

export  {addTask,
    deleteTask,
    checkTask,
    changeTheme,
    updateTask
}