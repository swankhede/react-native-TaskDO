import {CHANGE_THEME, SIGN_IN_USER, SIGN_OUT_USER} from './type'


const initialState={
    theme:'light',
    isSignedIn:false
    
}

const appReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case SIGN_IN_USER:
        return{
            ...state,
            isSignedIn:true,
            ...action.payload
        }
        case CHANGE_THEME:return{
            theme:action.payload

        }
        case SIGN_OUT_USER:return{
            ...initialState
        }
     

        default:return state
    }
}

export default appReducer