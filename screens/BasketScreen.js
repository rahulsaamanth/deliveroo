import { View, Text, TouchableOpacity, Image,ScrollView} from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation} from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const BasketScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])


    useEffect(() => {
      const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item)
        return results
      }, {})

      setGroupedItemsInBasket(groupedItems)
    },[items])


   
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-4 border-b border-[#00CCBB]  bg-white shadow-xs">
          <View>
            <Text className="text-center font-extrabold text-black text-lg">Basket</Text>
            <Text className="text-center text-gray-500">{restaurant.title}</Text>
          </View>
        <TouchableOpacity className="absolute bg-gray-200 top-3 right-3 rounded-full" onPress={navigation.goBack}>
          <XCircleIcon width={50} height={50} color="#00CCBB"/>
        </TouchableOpacity>
        </View>
        <View className="flex-row items-center px-4 py-3 space-x-4 my-5 bg-white">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
          />
          <Text className="flex-1 text-gray-800">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View key={key} className="flex-row items-center bg-white space-x-3 py-2 px-5">
                 <Text className="text-[#00CCBB] font-bold">{items.length} x</Text> 
                 <Image source={{
                  uri: urlFor(items[0]?.image).url()
                 }}
                 className="h-12 w-12 rounded-full"
                 />
                 <Text className="flex-1 text-gray-800">{items[0].name}</Text>
                 <Text className="text-gray-800"><Currency quantity={items[0]?.price} currency="INR"/></Text>

                 <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id : key }))}>
                  <Text className="text-[#00CCBB] text-xs" >
                    Remove
                  </Text>
                 </TouchableOpacity>
              </View>
            ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Subtotal</Text>
              <Text className="text-gray-600"><Currency quantity={basketTotal} currency="INR"/></Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600">Delivery Fee</Text>
              <Text className="text-gray-600"><Currency quantity={50} currency="INR"/></Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-black">Order Total</Text>
              <Text className="text-black"><Currency quantity={basketTotal + 50} currency="INR"/></Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('PreparingOrder')} className="rounded-lg p-4 bg-[#00CCBB]">
              <Text className="text-white font-bold text-lg text-center">Place Order</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
      
  )
}

export default BasketScreen