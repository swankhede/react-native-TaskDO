import firestore from '@react-native-firebase/firestore';
import { addTask } from '../../redux/action';

export const subscribe=(uid,dispatch)=>{
    const user =firestore().collection('users').doc(uid)
    const ref=user.collection('Tasks')
    ref.onSnapshot((query)=>{
    const list = [];
    query.forEach(doc => {
        console.log("doc",doc);
        const { title, isComplete,task } = doc.data();
        list.push({
        id: doc.id,
        title,
        task,
        isComplete,
        });
    })
    dispatch(addTask(list))
    })
}
