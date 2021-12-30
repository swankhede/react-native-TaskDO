import {CHANGE_THEME} from './type'


const initialState={
    theme:'light'
}

const appReducer=(state=initialState,action)=>{
    console.log(action.payload);
    switch(action.type){
        case CHANGE_THEME:return{
            theme:action.payload

        }
     

        default:return state
    }
}

export default appReducer