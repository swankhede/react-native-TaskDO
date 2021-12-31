import { Platform, StyleSheet } from "react-native"






export const styles = StyleSheet.create({
    main:{
    flex:1,
  },
    root:{
      flex:1,
      backgroundColor:'white'
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
    searchContainerStyle:{
      backgroundColor:'whitesmoke',
      borderRadius:10,
    },
    inputSearchStyle:{
      color:'black'
    },
    sheet:{
      backgroundColor:'white',
      
      
    },
    loginSheet:{
      backgroundColor:'white',
      
      height:200,

    },
    btn:{
      flexDirection:'row',
      backgroundColor:'dodgerblue',
      alignItems:'center',
      padding:10,
      margin:10,
      borderRadius:10,
      justifyContent:'space-around'
       
    },
    btnText:{
      color:'white',
      fontSize:20,
      left:-15
    },
    inputStyle:{
      backgroundColor:'whitesmoke',
      padding:15,
      borderRadius:10
    },
    inputContainerStyle:{
      borderBottomWidth:0,
      color:'black'
    },
    inputTask:{
     
      padding:15,
      borderRadius:10
    },
    inputContainerTask:{
      borderBottomWidth:0,
      color:'black',
      backgroundColor:'whitesmoke',
      borderRadius:10,
      height:100,
      alignItems:'flex-start'
    },
    closeBtn:{
      padding:10,
    },
    addBtn:{
      alignItems:'center',
      backgroundColor:'dodgerblue',
      padding:10,
      marginHorizontal:10,
      borderRadius:10,
    },
    addBtnText:{
      color:'white',
      fontSize:20,
    },
    strike:{
      textDecorationLine:'line-through',
    },
    bottomCloseBtn:{
      padding:20,
    },
    date:{
      fontSize:12,
      color:'grey'
    },
    sheet:{
      backgroundColor:'white',
    },
    bottomRow:{
      flexDirection:'row',
      alignItems:'center',
      padding:20,
    },
   
   
    text:{
      marginLeft:10
    },
    topView:{
      flexDirection:'row',
      alignItems:'center',
      
      justifyContent:'space-between',
      marginHorizontal:Platform.OS=='android'?15:10,
      marginVertical:5
    },
    userImage:{
      borderRadius:20,
      height:40,
      width:40,
    },
    
  })