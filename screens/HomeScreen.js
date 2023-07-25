import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {

    const navigation = useNavigation()

    const [featuredCategories, setFeaturedCategories] = useState([])


    useEffect(() =>{
      sanityClient.fetch(
        `*[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->  
          }
        }`
      ).then((data) => {
        setFeaturedCategories(data)
      })
    },[])
 
  return (
    <SafeAreaView className="bg-white pt-2">

        {/* Header */}

    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image 
      source={{
        uri:"https://links.papareact.com/wru"
      }}
      className="h-7 w-7 rounded-full bg-gray-300 p-4"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-gray-900 text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB"/>
    </View>

    {/* Search */}

    <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row  flex-1 bg-gray-200 items-center px-2">
            <MagnifyingGlassIcon color="gray"/>
            <TextInput placeholder='Restaurants and Cuisines' keyboardType='default'/>
        </View>
      <AdjustmentsHorizontalIcon color="#00CCBB"/>
    </View>

    {/* Body */}

    <ScrollView 
    className="bg-gray-100"
    contentContainerStyle={{
        paddingBottom: 100,
    }}
    >
        {/* Categories */}

        <Categories/>

        {/* Featured Rows */}

        {featuredCategories.map((category) =>(

        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />

        ))}

        

    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen