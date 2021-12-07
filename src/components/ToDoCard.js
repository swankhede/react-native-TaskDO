import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image, TouchableWithoutFeedbackBase } from 'react-native';
import { FAB,CheckBox,SearchBar,BottomSheet,Input,ListItem} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'




const CardContent=(props)=>{
    const {id}=props.content
    const{handleDelete}=props;
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
export const ToDoCard=(props)=>{
     
      const{item,handleCheck,handleDelete,isComplete}=props
      console.log("item",props)
    return(
      
      <View style={styles.card}>
  
        <CheckBox
  
          title={<CardContent content={item} handleDelete={handleDelete} key={item.id}/>}
          checked={item.isComplete}
          onPress={()=>props.handleCheck(item.id)}
          onLongPress={()=>props.handleBottomDelete(item.id)}
          uncheckedIcon={<Ionicons name={'ellipse-outline'} size={30} color={'grey'}/>}
          checkedIcon={<Ionicons name={'checkmark-circle'} size={30} color={'dodgerblue'}/>}
        />
  
        
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