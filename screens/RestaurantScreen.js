import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon ,StarIcon} from 'react-native-heroicons/solid'
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'


const RestaurantScreen = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const route = useRoute()
  
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params
  
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    )
  },[dispatch])

  const [isScrolledUp, setIsScrolledUp] = useState(false)


  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y
    setIsScrolledUp(scrollPosition > 0)
  }

  return (
    <>
    {/* <BasketIcon/> */}

    {isScrolledUp && <BasketIcon/>}

    <ScrollView onScroll={handleScroll}>
      <View className="relative">
        <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{
                uri: urlFor(imgUrl).url()
            }}
        />
        <TouchableOpacity 
            onPress={navigation.goBack}
            className="absolute left-5 top-10 h-10 w-10 bg-white rounded-full p-2"
        >
            <ArrowLeftIcon  color="#00CCBB" className="[&>path]:stroke-[10px]"/>
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4"> 
            <Text className="text-gray-900 text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" size={22} opacity={0.5}/>
                <Text className="text-xs text-gray-500"><Text className="text-green-500">{rating}</Text> • {genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" size={22} opacity={0.5}/>
                    <Text className="text-xs text-gray-500">Nearby • {address}</Text>
                </View>
            </View>
             <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20}/>
            <Text className="pl-2 flex-1 text-md font-bold text-black">
                Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB"/>
        </TouchableOpacity>
      </View>

      <View className="pb-36">
        <Text className="px-4 pt-4 mb-3 font-bold text-xl text-gray-950">Menu</Text>

        {/* DishRows */}

        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}

      </View>

    </ScrollView>

    </>  
  )
}

export default RestaurantScreen