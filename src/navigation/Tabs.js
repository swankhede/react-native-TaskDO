import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Other from '../screens/Other';

const Tab = createBottomTabNavigator();
const options=({route})=>({
    headerShown:false,
    keyboardHidesTabBar: true,
    tabBarIcon:({ color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        //console.log("foused",focused)
        iconName = 'home'
      } else if (route.name === 'History') {
        iconName = 'timer';
      }


      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })


const Tabs = () => {
    return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={options} >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="History" component={Other} />
        
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Tabs
