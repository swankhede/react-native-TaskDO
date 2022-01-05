import nextId from "react-id-generator";
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/action";


export const getTasks=async(dispatch)=>{
    
    const db=firestore()
    const user=await db.collection('users').doc('JJ2Nk55hlUvpTGQPTYaI')
    user.collection('Tasks').get()
    .then(res=>{
      res.docs.map(doc=>
       
        { console.log("doc=====>",doc)
        const { title, isComplete,task } = doc.data();
        dispatch(addTask({
          id: doc.id,
          title,
          task,
          isComplete,
        }))
    })

    })
    .then(console.log("data fetched"))
    
} 
