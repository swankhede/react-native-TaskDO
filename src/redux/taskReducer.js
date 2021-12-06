import {ADD_TASK,DELETE_TASK} from './type'

const initialState={
    tasks:[]
}

const taskReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TASK:return{
            tasks:[...state.tasks,action.payload]

        }

        case DELETE_TASK:return{
            tasks:state.tasks.push(action.payload)
        }

        default:return state
    }
}

export default taskReducer