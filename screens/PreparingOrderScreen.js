import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Circle from 'react-native-progress/Circle'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'



const PreparingOrderScreen = () => {


  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    },3000)
  })

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/preparingfood.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{fontWeight: "bold"}}
      >
       <Text className="text-center py-5 text-white text-lg">Waiting for restaurant to accept the order!    </Text>
      </Animatable.Text>
      <View className="mt-5">
        <Circle size={60} indeterminate={true} color="white" borderWidth={4} fill="none"/>
      </View>

      

    </SafeAreaView>
  )
}

export default PreparingOrderScreen