import {addTask} from '../../redux/action';
import {users} from './constants';

export const subscribe = (uid, dispatch) => {
  const user = users.doc(uid);
  const ref = user.collection('Tasks');
  ref.onSnapshot(query => {
    const list = [];
    query.forEach(doc => {
      console.log('doc', doc);
      const {title, isComplete, task} = doc.data();
      list.push({
        id: doc.id,
        title,
        task,
        isComplete,
      });
    });
    dispatch(addTask(list));
  });
};
