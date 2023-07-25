import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from "react-currency-formatter"

const BasketIcon = () => {

    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} 
      className="flex-row bg-[#00CCBB] mx-5 p-4 rounded-lg items-center space-x-1"
      activeOpacity={0.8}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white">
            <Currency quantity={basketTotal} currency="INR"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon