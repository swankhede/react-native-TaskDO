import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image, TouchableWithoutFeedbackBase, ScrollView, SafeAreaView } from 'react-native';
import { FAB,CheckBox,SearchBar,BottomSheet,Input,ListItem} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch ,useSelector } from 'react-redux';
import { addTask, checkTask, deleteTask, updateTask } from '../../redux/action';
import nextId from "react-id-generator";
import { EmptyView } from '../../components/EmptyView';
import { ToDoCard } from '../../components/ToDoCard';
import { styles } from './styles';
import moment from 'moment';

const AddTask=(props) =>  {
  console.log(props);
  const [state, setState] = useState({
   
    title:null,
    task:null,
    priority:null,
    isComplete:false
  })
  const [isVisible, setVisible] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [isDeleteVisible, setDeleteVisible] = useState(false)
  const dispatch=useDispatch()
  const reduxState=useSelector(({tasks})=>tasks)
  const theme=useSelector(({theme})=>theme)
  
  


  const handleSubmit=()=>{
    if(isEdit){
      setState({...state,date:moment().format('ll')})
      console.log(state.id);
      dispatch(updateTask(state))
      setState({
        title:null,
        task:null,
        priority:null,
        isComplete:false
      })
      setEdit(false)
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
   
    
  }
  const handleCheck=(id)=>{
    console.log("line 78",id)
    dispatch(checkTask(id))
  }
  const handleDelete=(id)=>{
    console.log(id)
    dispatch(deleteTask(id))
    
  }
  const handleEdit=(task)=>{
    setState({...task})
    setEdit(true)
    console.log(task);
    setVisible(true)
   
    
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


