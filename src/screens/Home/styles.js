import { StyleSheet } from "react-native"
import store from "../../redux/store"




const getTheme=()=>store.getState().theme.theme==='light'?'white':'black'

const backgroundColor=getTheme()
const color=getTheme()

export const styles = StyleSheet.create({
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
      backgroundColor:backgroundColor,
      
      
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
      color:color,
      fontSize:20,
    },
    strike:{
      textDecorationLine:'line-through',
    }
    
  })