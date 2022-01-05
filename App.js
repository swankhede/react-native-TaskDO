import React,{useEffect} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from './src/screens/Home/HomeScreen';
import Tabs from './src/navigation/Tabs';
import { Provider } from 'react-redux';
import stores from './src/redux/store';
import crashlytics from '@react-native-firebase/crashlytics';
import Demo from './src/screens/Demo';
import { PersistGate } from 'redux-persist/integration/react'


crashlytics().setCrashlyticsCollectionEnabled(true)

const App=() =>  {
  const{store,persistor}=stores()
  
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Tabs/>
    </PersistGate>
  </Provider>

  )
}

export default App

