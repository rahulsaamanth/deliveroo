import { View, Text, ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import sanityClient from '../sanity'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = (props) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]

      `,{id : props.id}
    )
    .then((data) => {
      setRestaurants(data?.restaurants)
    })
  },[props.id])


  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-gray-900 text-lg">{props.title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs px-4 text-gray-600">{props.description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {/* Restaurant Cards */}

        {restaurants?.map(restaurant => (
          <RestaurantCard
           key={restaurant._id}
           id={restaurant._id}
           imgUrl={restaurant.image}
           title={restaurant.title}
           rating={restaurant.rating}
           genre={restaurant.type?.name}
           address={restaurant.address}
           short_description={restaurant.short_description}
           dishes={restaurant.dishes}
           long={restaurant.long}
           lat={restaurant.lat}
          />
        ))}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow