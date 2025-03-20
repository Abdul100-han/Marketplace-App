import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
const LoginScreen = () => {
  return (
    <View>
        <Image source={require('../../assets/images/market.jpg')}
        className='w-full h-[400px] object-cover'
        />

        <View className='p-8 bg-white mt-[-20px] rounded-t-3xl'>
            <Text className='text-[35px] font-bold'>Cmmunity Marketplace</Text>
            
            <Text className='text-[18px] text-slate-500 mt-6'>Buy sell MarketPlcae where you can sell and buy stuffs </Text>
        </View>

        <TouchableOpacity onPress={() => console.log('Sign In')} className='p-4 bg-blue-500 rounded-full mt-20'>
            <Text className='text-white text-center text-[18px]'>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen