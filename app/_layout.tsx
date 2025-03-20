import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import LoginScreen from './Screens/LoginScreen'

import '../global.css'

const _layout = () => {
  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  )
}

export default _layout