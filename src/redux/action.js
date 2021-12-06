import { ADD_TASK, DELETE_TASK } from "./type"


const addTask=(task)=>{
    return {
        type:ADD_TASK,
        payload:task
    }
}

const deleteTask=(task)=>{
    return {
        type:DELETE_TASK,
        payload:task
    }
}

export  {addTask,deleteTask}