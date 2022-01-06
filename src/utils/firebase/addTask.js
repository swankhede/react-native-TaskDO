import nextId from 'react-id-generator';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import {users} from './constants';

export const submitTask = async (
  taskObj,
  uid,
  navigation,
  disptach,
  isEdit = false,
) => {
  const query = users.doc(uid).collection('Tasks');

  if (taskObj.title != '' || taskObj.task != '') {
    if (isEdit) {
      query.doc(taskObj.id).update({
        ...taskObj,
      });

      navigation.goBack();
    } else {
      const task = {...taskObj, date: moment().format('ll')};
      query.add({
        ...task,
      });

      navigation.goBack();
    }
  } else {
    navigation.goBack();
  }
};
