import React,{useEffect} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from './src/screens/Home/HomeScreen';
import Tabs from './src/navigation/Tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import crashlytics from '@react-native-firebase/crashlytics';
import Demo from './src/screens/Demo';
crashlytics().setCrashlyticsCollectionEnabled(true)
const App=() =>  {

  return(
    <Provider store={store}>
 
    <Tabs/>
   </Provider>

  )
}

export default App

