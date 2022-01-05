import nextId from "react-id-generator";
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

export const addTask=(taskObj,navigation,isEdit=false)=>{
    console.log("adding...",taskObj);
    if(taskObj.title!='' || taskObj.task!=''){
      if(isEdit){
        setState({...task,date:moment().format('ll')})
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
        const task={...taskObj,date:moment().format('ll')}
        firestore()
        .collection('Tasks')
        .add({
            ...task
        })
        .then(() => {
            console.log(task);
        });
        // dispatch(addTask(task))
        // setState({
        //   title:null,
        //   task:null,
        //   priority:null,
        //   isComplete:false
        // })
      }
    }else{
      navigation.goBack()
    }
  
   
    
  }