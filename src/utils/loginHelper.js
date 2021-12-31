import { saveUserData, signOutUser } from "../redux/action";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const onGoogleButtonPress=async()=>{
    try{
      const { idToken } = await GoogleSignin.signIn();
      const isSignedIn = await GoogleSignin.isSignedIn();
     
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      //console.log("cred=====>",googleCredential)
      const res =await auth().signInWithCredential(googleCredential);
      dispatch(signInUser (res))
    }
    catch(e){
      console.log("Error=>>>>>>>>>>",e);
    }
   
   
  }

export const onGoogleSignOut=async()=>{
    try{
      await GoogleSignin.revokeAccess(); 
      console.log('passed revoke access'); 
      console.log('passed signOut');
      dispatch(signOutUser())
    }catch(e){
      console.error("Error>>>>>>>>",e);
    }
    
  }