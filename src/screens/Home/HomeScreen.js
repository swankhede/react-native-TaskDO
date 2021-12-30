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

const HomeScreen=(props) =>  {
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
      setState({...state,id:nextId(),date:moment().format('ll')})
      console.log(state.id);
      dispatch(addTask(state))
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
    <View style={styles.root}>
    <SafeAreaView style={styles.root}>
     
      <View style={styles.container}> 
      
      <SearchBar
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchContainerStyle}
        inputStyle={styles.inputSearchStyle}
        placeholder="Type Here..."
      />
      
      {
        reduxState.tasks.length>0?
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={reduxState.tasks}
        renderItem={(renderItem)=>
        
        <ToDoCard  
        item={renderItem.item} 
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        />
      
      }
      />:
      <EmptyView/>
      }
      
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={()=>props.navigation.navigate('task')}>
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
        
        <TouchableOpacity style={styles.bottomRow} onPress={()=>props.handleEdit(item)}>
        <TouchableOpacity style={styles.deleteBtn} >
          <FontAwesome5 name={'pen'} color={'black'} size={20}/>  
          </TouchableOpacity>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomRow}onPress={()=>props.handleDelete(item.id)}>
        <TouchableOpacity style={styles.deleteBtn} >
          <FontAwesome5 name={'trash'} color={'black'} size={20}/>  
          </TouchableOpacity>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
        
        
        </View>
      
     
    </BottomSheet>
    </View>
   
  )
}

export default HomeScreen


