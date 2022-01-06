import {users} from './constants';

export const handleCheckTask = async (
    uid,
    taskObj,
  
  ) => {
  const query = users.doc(uid).collection('Tasks');

    query.doc(taskObj.id).update({
        ...taskObj,
        isComplete:!taskObj.isComplete
      })

      
    
}
