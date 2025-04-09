import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import LoginScreen from './Screens/LoginScreen'

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import '../global.css'

const _layout = () => {
  return (
    <ClerkProvider publishableKey='pk_test_bGFzdGluZy1ob3JzZS00Ni5jbGVyay5hY2NvdW50cy5kZXYk'>
    <SafeAreaView>
     

      {/* auth  */}
      <SignedIn>
        <Text className='mt-10'>You are signed in </Text>
      </SignedIn>

      <SignedOut>
      <LoginScreen />
      </SignedOut>

    </SafeAreaView>
    </ClerkProvider>
  )
}

export default _layout