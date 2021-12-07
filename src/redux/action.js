import { ADD_TASK, DELETE_TASK,CHECK_TASK } from "./type"


const addTask=(task)=>{
    return {
        type:ADD_TASK,
        payload:task
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

export  {addTask,deleteTask,checkTask}