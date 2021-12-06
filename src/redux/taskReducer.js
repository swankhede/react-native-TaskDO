import {ADD_TASK,CHECK_TASK,DELETE_TASK} from './type'
import { useSelector } from 'react-redux'

const initialState={
    tasks:[]
}

const taskReducer=(state=initialState,action)=>{
    console.log(action.payload);
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
               
        case DELETE_TASK:return{
            tasks:state.tasks.push(action.payload)
        }

        default:return state
    }
}

export default taskReducer