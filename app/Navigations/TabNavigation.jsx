import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';

const MyTabs = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='name' component={HomeScreen} />
        <Tab.Screen name='explore' component={ExploreScreen} />
        <Tab.Screen name='addpost' component={AddPostScreen} />
        <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation