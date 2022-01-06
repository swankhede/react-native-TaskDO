import firestore from '@react-native-firebase/firestore';

export const users = firestore().collection('users');
