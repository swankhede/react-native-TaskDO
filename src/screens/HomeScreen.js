import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image } from 'react-native';
import { FAB,CheckBox,SearchBar,BottomSheet,Input,ListItem} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch ,useSelector } from 'react-redux';
import { addTask } from '../redux/action';


const CardContent=(props)=>{
  return (
  <View>
   
    <Text style={styles.heading}>
       {props.content.title}
      </Text>
      <Text style={styles.subHeading}>
        {props.content.task}
      </Text>
  </View>
  )
}
const Card=(props)=>{
 //console.log(props);
  return(
    
    <View style={styles.card}>

      <CheckBox

        title={<CardContent content={props.props}/>}
        checked={props.props.isComplete}
       
        checkedIcon={<Ionicons name={'checkmark-circle'} size={30} color={'dodgerblue'}/>}
      />

      
    </View>
  )
}

const EmptyView=()=>{
  return(
    <View style={styles.empty}>
    
      <FontAwesome5
      
      name={'folder-open'}
      color={'grey'}
      size={100}     
        />
    <Text style={styles.emptyText}>No Tasks</Text>
   
     
    </View>
  )
}


const HomeScreen=() =>  {
  
  const [state, setState] = useState({
   
    title:null,
    task:null,
    priority:null,
    isComplete:false
  })
  const [isVisible, setVisible] = useState(false)
  const dispatch=useDispatch()
  const reduxState=useSelector((state)=>state)
  //console.log(reduxState);
  const handleSubmit=()=>{
    //console.log(state)
    dispatch(addTask(state))
    
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
      data={reduxState.tasks}
      renderItem={(renderItem)=>
        <Card props={renderItem.item}/>
      
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
          onChangeText={(val)=>setState({...state,title:val})}
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
  empty:{
    flex:1,
    justifyContent:'center', 
    alignSelf:'center',
    alignItems:'center',
  },

  emptyText:{
    color:'grey',
    fontSize:20,
    
  }
  
})
export default HomeScreen

