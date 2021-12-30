import React,{useEffect} from 'react'
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Demo from '../screens/Demo';
import AddTask from '../screens/Home/AddTask';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const options=({route})=>({
    headerShown:false,
    keyboardHidesTabBar: true,
    presentation: 'modal',
    gestureDirection: 'vertical',
    tabBarIcon:({ color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        //console.log("foused",focused)
        iconName = 'home'
      } else if (route.name === 'Settings') {
        iconName = 'settings';
      }


      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })


const Tabs = () => {

    return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='task' component={AddTask}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Tabs
