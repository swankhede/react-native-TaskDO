import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image, TouchableWithoutFeedbackBase } from 'react-native';
import { FAB,CheckBox,SearchBar,BottomSheet,Input,ListItem} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch ,useSelector } from 'react-redux';
import { addTask, checkTask, deleteTask } from '../redux/action';
import nextId from "react-id-generator";
import { EmptyView } from '../components/EmptyView';
import { ToDoCard } from '../components/ToDoCard';


const HomeScreen=() =>  {
  
  const [state, setState] = useState({
   
    title:null,
    task:null,
    priority:null,
    isComplete:false
  })
  const [isVisible, setVisible] = useState(false)
  const [isDeleteVisible, setDeleteVisible] = useState(false)
  const dispatch=useDispatch()
  const reduxState=useSelector((state)=>state)
  //console.log(reduxState);

  const CardContent=(props)=>{
    const{id}=props.content
    //console.log("id",id);
    return (
    <View style={styles.row}>
      <View>
      <Text style={[styles.heading,props.content.isComplete?styles.strike:null]}>
         {props.content.title}
        </Text>
        <Text style={[styles.subHeading,props.content.isComplete?styles.strike:null]}>
          {props.content.task}
        </Text>
      </View>
    
        <TouchableOpacity style={styles.closeBtn} onPress={()=>handleDelete(id)}>
        <FontAwesome5 name={'times'} color={'grey'} size={15}/>  
       </TouchableOpacity>
    </View>
    )
  }
  const Card=(props)=>{
      //console.log(props.props.isComplete);
      const{id,isComplete}=props.props
      
    return(
      
      <View style={styles.card}>
  
        <CheckBox
  
          title={<CardContent content={props.props} key={props.props.id}/>}
          checked={props.props.isComplete}
          onPress={()=>handleCheck(id)}
          onLongPress={()=>handleBottomDelete(id)}
          uncheckedIcon={<Ionicons name={'ellipse-outline'} size={30} color={'grey'}/>}
          checkedIcon={<Ionicons name={'checkmark-circle'} size={30} color={'dodgerblue'}/>}
        />
  
        
      </View>
    )
  }


  const handleSubmit=()=>{
    //console.log(state)
    dispatch(addTask(state))
    
  }
  const handleCheck=(id)=>{
    console.log("line 78",id)
    dispatch(checkTask(id))
  }
  const handleDelete=(id)=>{
    console.log(id)
    dispatch(deleteTask(id))
    
  }
  const handleBottomDelete=(id)=>{
    setDeleteVisible(true)
    handleDelete(id)
  }

  return(
    <View style={styles.root}>

      <View style={styles.container}> 
      <SearchBar
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      placeholder="Type Here..."
      />
      {
        reduxState.tasks.length>0?
        <FlatList
        keyExtractor={(item, index) => item.key}
      data={reduxState.tasks}
      renderItem={(renderItem)=>
        
        <ToDoCard  
        item={renderItem.item} 
        key={renderItem.item.id}
        handleBottomDelete={handleDelete}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        />
      
      }
      />:
      <EmptyView/>
      }
      
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={()=>setVisible(true)}>
          <FontAwesome5 name={'plus'} color={'white'}/>
        </TouchableOpacity>
      </View>
    

      </View>
    <BottomSheet
     isVisible={isVisible}
     >
      <View style={styles.sheet}>
      
      <TouchableOpacity style={styles.closeBtn} onPress={()=>setVisible(false)}>
        <FontAwesome5 name={'times'} color={'black'} size={20}/>  
       </TouchableOpacity>
        
        <Input
          placeholder='Title'
          onChangeText={(val)=>setState({...state,title:val,id:nextId()})}
        />

        <Input
          placeholder='Task'
          multiline
          onChangeText={(val)=>setState({...state,task:val})}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
          <Text style={styles.addBtnText}>Add Task</Text>
        </TouchableOpacity>
        
        </View>
      
     
    </BottomSheet>
    
    <BottomSheet
     isVisible={isDeleteVisible}
     >
      <View style={styles.sheet}>
      
      <TouchableOpacity style={styles.closeBtn} onPress={()=>setDeleteVisible(false)}>
        <FontAwesome5 name={'times'} color={'black'} size={20}/>  
       </TouchableOpacity>
       
        <TouchableOpacity style={styles.addBtn} onPress={()=>handleDeleteBottom(id)}>
        <FontAwesome5 name={'trash'} color={'white'} size={30}/>  
        </TouchableOpacity>
        
        </View>
      
     
    </BottomSheet>
    </View>
   
  )
}
const styles = StyleSheet.create({
  root:{
    flex:1,
    
  },
  heading:{
    fontSize:20,
    fontWeight:'bold'
  },
  container:{
    padding:10,
    flex:1,
   
  },
  fabContainer:{
    position:'absolute',
    zIndex:99,
    bottom:30,
    alignSelf:'flex-end',
    right:20,

   
  },
  fab:{
    borderRadius:500,
    backgroundColor:'dodgerblue',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
  },
  card:{
    flex:1,
    width:'100%',
  },
  searchContainer:
  { backgroundColor:'transparent',
   borderTopColor:0,
    borderBottomColor:0
  },
  inputContainerStyle:{
    backgroundColor:'white',
    borderRadius:10,
  },
  inputStyle:{
    color:'black'
  },
  sheet:{
    backgroundColor:'white',
    
  },
  closeBtn:{
    padding:10,
  },
  addBtn:{
    alignItems:'center',
    backgroundColor:'dodgerblue',
    padding:10,
  },
  addBtnText:{
    color:'white',
    fontSize:20,
  },
  strike:{
    textDecorationLine:'line-through',
  }
  
})
export default HomeScreen


