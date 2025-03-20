import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import * as webBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '@/hooks/warmUpBrowser';
import { useAuth } from '@clerk/clerk-expo';

webBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {

    useWarmUpBrowser();

    const { startOAuthFlow } = useAuth({strategy: "oauth_google"})

    const onPress = Reac.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = 
                await startOAuthFlow();

                if (createdSessionId) {
                    setActive({ session: createdSessionId });
                } else {

                }

            
        } catch (error) {
            console.log("Outh Error", error);;
            
        }
    })


  return (
    <View>
        <Image source={require('../../assets/images/market.jpg')}
        className='w-full h-[400px] object-cover'
        />

        <View className='p-8 bg-white mt-[-20px] rounded-t-3xl'>
            <Text className='text-[35px] font-bold'>Cmmunity Marketplace</Text>
            
            <Text className='text-[18px] text-slate-500 mt-6'>Buy sell MarketPlcae where you can sell and buy stuffs </Text>
        </View>

        <TouchableOpacity onPress={onPress} className='p-4 bg-blue-500 rounded-full mt-20'>
            <Text className='text-white text-center text-[18px]'>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen