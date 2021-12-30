import React,{useEffect, useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image, TouchableWithoutFeedbackBase, ScrollView, SafeAreaView } from 'react-native';
import { FAB,CheckBox,SearchBar,BottomSheet,Input,ListItem} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch ,useSelector } from 'react-redux';
import { addTask, checkTask, deleteTask, updateTask } from '../../redux/action';
import nextId from "react-id-generator";
import { EmptyView } from '../../components/EmptyView';
import { ToDoCard } from '../../components/ToDoCard';
import { styles } from '../Home/styles';
import moment from 'moment';

const AddTask=(props) =>  {

  const {task,isEdit}=props.route.params
  const [state, setState] = useState({
    id:isEdit?task.id:'',
    title:isEdit?task.title:'',
    task:isEdit?task.task:'',
    priority:'',
    isComplete:false
  })
  const [isVisible, setVisible] = useState(false)

  const [isDeleteVisible, setDeleteVisible] = useState(false)
  const dispatch=useDispatch()
  const reduxState=useSelector(({tasks})=>tasks)
  const theme=useSelector(({theme})=>theme)
 



  const handleSubmit=()=>{
    if(state.title!='' || state.task!=''){
      if(isEdit){
        setState({...state,date:moment().format('ll')})
        console.log(state.id,"-------dispatching--------");
        dispatch(updateTask(state))
        setState({
          title:null,
          task:null,
          priority:null,
          isComplete:false
        })
       props.navigation.goBack()
      }else{
        const task={...state,id:nextId(),date:moment().format('ll')}
        dispatch(addTask(task))
        setState({
          title:null,
          task:null,
          priority:null,
          isComplete:false
        })
      }
    }else{
      props.navigation.goBack()
    }
  
   
    
  }
 

  return(
    <SafeAreaView style={styles.root}>
     
     <View style={styles.sheet}>
   
   <TouchableOpacity style={styles.closeBtn} onPress={()=>props.navigation.goBack()}>
    <FontAwesome5 name={'times'} color={'black'} size={20}/>  
   </TouchableOpacity>
    
    <Input
      placeholder='Title'
      value={state.title}
      
      inputStyle={styles.inputStyle}
      inputContainerStyle={styles.inputContainerStyle}
      placeholderTextColor={'black'}
      onChangeText={(val)=>setState({...state,title:val})}
    />

    <Input
      placeholder='Task'
      multiline
      
      inputStyle={styles.inputTask}
      inputContainerStyle={styles.inputContainerTask}
      placeholderTextColor={'black'}
      value={state.task}
      onChangeText={(val)=>setState({...state,task:val})}
    />
    <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
      <Text style={styles.addBtnText}>{isEdit?'Edit Task':'Add Task'}</Text>
    </TouchableOpacity>

  
    
    </View>

    </SafeAreaView>
   
  )
}

export default AddTask


