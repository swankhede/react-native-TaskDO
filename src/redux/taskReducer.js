import {ADD_TASK,CHECK_TASK,DELETE_TASK, UPDATE_TASK} from './type'
import { useSelector } from 'react-redux'

const initialState={
    tasks:[]
}

const taskReducer=(state=initialState,action)=>{
    console.log("pay",action.payload);
    switch(action.type){
        case ADD_TASK:return{
            tasks:[...state.tasks,action.payload]

        }
        case CHECK_TASK:const tasks =state.tasks.map(task=>task.id==action.payload?{...task,isComplete:!task.isComplete}:task)
                        console.log(tasks);
                        return{
                            tasks:[
                                ...tasks
                            ]
                            
                        }

        case UPDATE_TASK:const updatedTask =state.tasks.map(task=>task.id==action.payload.id?{...action.payload}:task)
                        console.log(updatedTask);
                        return{
                            tasks:[
                                ...updatedTask
                            ]
                            
                        }

        
               
        case DELETE_TASK:
                        const newTasks=state.tasks.filter(task=>action.payload!=task.id)
                        console.log("25",newTasks);
                        return {
                            tasks:[...newTasks]
                        }

        default:return state
    }
}

export default taskReducer