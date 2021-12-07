import React from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Other=() =>  {

  return(
    <View style={styles.root}>

      <View style={styles.container}> 
      <Text style={styles.heading}>Other</Text>
     
    

      </View>
    
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
  
  }
})
export default Other

