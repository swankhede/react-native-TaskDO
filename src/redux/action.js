import { ADD_TASK, 
    DELETE_TASK,CHECK_TASK, 
    CHANGE_THEME ,
    UPDATE_TASK,
    SIGN_IN_USER,
    SIGN_OUT_USER
} from "./type"

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const addTask=(task)=>{
    
    return {
        type:ADD_TASK,
        payload:task
    }
}
const signInUser=(data)=>{
    console.log("data",data);
    return{
        type:SIGN_IN_USER,
        payload:data
    }
}
const signOutUser=()=>{
    return{
        type:SIGN_OUT_USER,
        
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



export const signIn=()=>{
        return async(dispatch)=>{
            console.log("signinin...");
            const { idToken } = await GoogleSignin.signIn();
            const isSignedIn = await GoogleSignin.isSignedIn();
            console.log("cred=====>",isSignedIn)
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            //console.log("cred=====>",googleCredential)
            const res =await auth().signInWithCredential(googleCredential);
            dispatch(signInUser(res))
            dispatch(signInUser(isSignedIn))
        }
    } 

export const signOut=()=>{
        return async(dispatch)=>{
            await GoogleSignin.revokeAccess(); 
            console.log('passed revoke access'); 
            console.log('passed signOut');
            dispatch(signOutUser())
        }
}



export{
    addTask,
    deleteTask,
    checkTask,
    changeTheme,
    updateTask,
    signInUser,
    signOutUser

}