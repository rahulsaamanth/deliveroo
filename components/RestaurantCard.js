import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as OutlineIcons from 'react-native-heroicons/outline'
import * as SolidIcons from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


const RestaurantCard = ({id, imgUrl, title, rating, genre, address, short_description, dishes, long , lat}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity 
        onPress={() => {
            navigation.navigate('Restaurant',{
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat
            })
        }}    
        className="mr-3 bg-white shadow"
    >
        <Image source={{
            uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
        />
        <View className="px-3 pb-4">
            <Text className="font-bold text-gray-900 text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <SolidIcons.StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="text-gray-500"><Text className="text-green-500">{rating}</Text> • {genre}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <OutlineIcons.MapPinIcon color="gray" opacity={0.4} size={22}/>
                <Text className="text-xs text-gray-500">Nearby • {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard