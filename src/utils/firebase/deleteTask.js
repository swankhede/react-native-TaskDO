import {users} from './constants';

export const handleDeleteTask = async (uid,taskId) => {
  const query = users.doc(uid).collection('Tasks');
    query.doc(taskId).delete()

      
    
}
