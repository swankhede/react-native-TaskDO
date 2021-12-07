import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, FlatList,Image, TouchableWithoutFeedbackBase } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export const EmptyView=()=>{
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
  
  const styles=StyleSheet.create({
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