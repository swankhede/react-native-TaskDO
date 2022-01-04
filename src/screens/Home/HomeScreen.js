import React,{useState,useEffect} from 'react';
import { Text,View,TouchableOpacity, FlatList,Image, SafeAreaView } from 'react-native';
import {SearchBar,BottomSheet} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useDispatch ,useSelector } from 'react-redux';
import { addTask, checkTask, deleteTask, signInUser, signOutUser } from '../../redux/action';
import { EmptyView } from '../../components/EmptyView';
import { ToDoCard } from '../../components/ToDoCard';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {getScheduleNotification } from '../../utils/notification';
import firestore from '@react-native-firebase/firestore';

const HomeScreen=(props) =>  {
  console.log(props);
  const [state, setState] = useState({
   
    title:null,
    task:null,
    priority:null,
    isComplete:false
  })
  const [isVisible, setVisible] = useState(false)
  const [isLoginSheet, setLoginSheet] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  
  const dispatch=useDispatch()
  const reduxState=useSelector(({tasks})=>tasks)
  const userData=useSelector(({state})=>state)
  console.log("=======================state=======================");

  console.log(userData.isSignedIn);


  console.log("=======================state=======================");
  
  useEffect(async() => {
    GoogleSignin.configure({
      webClientId:'42814240371-9k7s1ad8socdb7gu8rqsfu9khsncn9pg.apps.googleusercontent.com',
    });
    
 
    const isSignedIn = await GoogleSignin.isSignedIn();
    //alert(isSignedIn)
    !isSignedIn?dispatch(signInUser({isSignedIn:false})):null
    const usersCollection = firestore().collection('Tasks');
    const data=await usersCollection.doc('sfwBLSk5NlOH0Io9vuTe').get()
    console.log(data);
    dispatch(addTask(data._data))
  }, [])


      
    

  
  const onGoogleButtonPress=async()=>{
    try{
      const { idToken } = await GoogleSignin.signIn();
      const isSignedIn = await GoogleSignin.isSignedIn();
      setLoggedIn(isSignedIn)
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      //console.log("cred=====>",googleCredential)
      const res =await auth().signInWithCredential(googleCredential);
      dispatch(signInUser (res))
    }
    catch(e){
      console.log("Error=>>>>>>>>>>",e);
    }
   
   
  }

  const onGoogleSignOut=async()=>{
    try{
      await GoogleSignin.revokeAccess(); 
      await GoogleSignin.signOut()
      console.log('passed revoke access'); 
      console.log('passed signOut');
      dispatch(signOutUser())
    }catch(e){
      console.error("Error>>>>>>>>",e);
    }
    
  }

  const TopView=()=>(
    <View style={styles.topView}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Hey,Welcome</Text>
        {
          userData.isSignedIn?
         <TouchableOpacity onPress={()=>setLoginSheet(!isLoginSheet)}>
              <Image
              source={{uri:userData?.user?.photoURL}}
              style={styles.userImage}
              />
          </TouchableOpacity>
        
          :
          <TouchableOpacity onPress={()=>setLoginSheet(!isLoginSheet)}>
            <Image
              source={require('../../assests/no-user.jpeg')}
              style={styles.userImage}
            />
          </TouchableOpacity>

        }
       </View>
  )
  


 
  const handleLongPress=(task)=>{
    setVisible(true)
    setState({...task})
  }
  const handleCheck=(task)=>{
    console.log("line 78",task)
    dispatch(checkTask(task))
  }
  const handleDelete=(id)=>{
    console.log(id)
    dispatch(deleteTask(id))
    
  }
  const handleEdit=(task)=>{
    setVisible(false)
    console.log("-----task-----",task);
    props.navigation.navigate('task',{
      isEdit:true,
      task:task
    })
   }

  return(
    <View style={styles.main}>
      
    <SafeAreaView style={styles.root}>
    <TopView/>
      <View style={styles.container}> 
      
      {/* <SearchBar
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchContainerStyle}
        inputStyle={styles.inputSearchStyle}
        placeholder="Type Here..."
      /> */}
       
       
       {
        reduxState.tasks.length>0?
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={reduxState.tasks}
        renderItem={(renderItem)=>
        
        <ToDoCard  
        item={renderItem.item}
        handleLongPress={handleLongPress} 
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        />
      
      }
      />:
      <EmptyView/>
      } 
      {/* <TouchableOpacity style={styles.fab} onPress={()=>getScheduleNotification()}>
        <Text>click me</Text>
        </TouchableOpacity> */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={()=>props.navigation.navigate('task',{isEdit:false})}>
          <FontAwesome5 name={'plus'} color={'white'} size={20}/>
        </TouchableOpacity>
      </View>
    

      </View>
 
    

    </SafeAreaView>

    <BottomSheet
     isVisible={isVisible}
     >
      <View style={styles.sheet}>
      
      <TouchableOpacity style={styles.bottomCloseBtn} onPress={()=>setVisible(false)}>
        <FontAwesome5 name={'times'} color={'black'} size={20}/>  
       </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomRow} onPress={()=>handleEdit(state)}>
        <TouchableOpacity style={styles.deleteBtn} >
          <FontAwesome5 name={'pen'} color={'black'} size={20}/>  
          </TouchableOpacity>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomRow}onPress={()=>handleDelete(state.id)}>
        <TouchableOpacity style={styles.deleteBtn} >
          <FontAwesome5 name={'trash'} color={'black'} size={20}/>  
          </TouchableOpacity>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
        
        
        </View>
      
     
    </BottomSheet>
    <BottomSheet
     isVisible={isLoginSheet}
     >
      <View style={styles.loginSheet}>
      <TouchableOpacity style={styles.bottomCloseBtn} onPress={()=>setLoginSheet(false)}>
        <FontAwesome5 name={'times'} color={'black'} size={20}/>  
       </TouchableOpacity>
         
        {
          userData.isSignedIn?
          <TouchableOpacity style={styles.btn} onPress={() => onGoogleSignOut() }>
            <FontAwesome5 name='sign-out-alt' size={30} color={'white'}/>
          <Text style={styles.btnText}>Sign out</Text>
          </TouchableOpacity>
        :
        <TouchableOpacity style={styles.btn} onPress={() => onGoogleButtonPress()}>
          <FontAwesome5 name='google' size={30} color={'white'}/>
        <Text style={styles.btnText}>Signin with Google</Text>
        </TouchableOpacity>
        }
          
         
      </View>
      
     
    </BottomSheet>
   
    </View>
   
  )
}

export default HomeScreen


