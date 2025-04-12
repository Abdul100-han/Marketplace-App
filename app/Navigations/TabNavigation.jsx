import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name='home' component={HomeScreen} 
        options={{
          tabBarLabel:({color}) => {
            <Text style={{color:color}}>Home</Text>
          },
          tabBarIcon:({color, size}) => {
            <Entypo name="home" size={24} color={color} />
          }
        }}
        />
        <Tab.Screen name='explore' component={ExploreScreen}
        options={{
          tabBarLabel:({color}) => {
            <Text style={{color:color}}>Explore</Text>
          },
          tabBarIcon:({color}) => {
            <Feather name="search" size={24} color={color} />
          }
        }}
        />
        <Tab.Screen name='addpost' component={AddPostScreen}
        options={{
          tabBarLabel:({color}) => {
            <Text style={{color:color}}>Add Post</Text>
          },
          tabBarIcon:({color, size}) => {
            <AntDesign name="camerao" size={24} color={color} />
          }
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen} 
        options={{
          tabBarLabel:({color}) => {
            <Text style={{color:color}}>Profile</Text>
          },
          tabBarIcon:({color, size}) => {
            <Ionicons name="person-circle" size={24} color="black" />
          }
        }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation