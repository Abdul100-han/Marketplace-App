import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import LoginScreen from './Screens/LoginScreen'

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import '../global.css'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation'


const _layout = () => {
  return (
    <ClerkProvider publishableKey='pk_test_bGFzdGluZy1ob3JzZS00Ni5jbGVyay5hY2NvdW50cy5kZXYk'>
    <SafeAreaView>
      

      {/* auth  */}
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>

      <SignedOut>
      <LoginScreen />
      </SignedOut>

    </SafeAreaView>
    </ClerkProvider>
  )
}

export default _layout