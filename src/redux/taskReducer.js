import {ADD_TASK,CHECK_TASK,DELETE_TASK, UPDATE_TASK} from './type'
import { useSelector } from 'react-redux'

const initialState={
    tasks:[]
}

const taskReducer=(state=initialState,action)=>{
    console.log(action.payload);
    switch(action.type){
        case ADD_TASK:return{
                    tasks:action.payload

                    }
        case CHECK_TASK:const filteredTask=state.tasks.filter(task=>action.payload.id!=task.id)
                        let task={...action.payload}
                        task={...task,isComplete:!task.isComplete}
                        filteredTask.push(task)
                        return{
                            tasks:[
                                ...filteredTask
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

        default:return initialState
    }
}

export default taskReducer