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

const deleteTask=(task)=>{
    return {
        type:DELETE_TASK,
        payload:task
    }
}

export  {addTask,deleteTask,checkTask}