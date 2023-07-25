import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectRestaurant} from '../features/restaurantSlice';
import {XMarkIcon} from 'react-native-heroicons/outline';
import * as progress from 'react-native-progress';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView>
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-extrabold">Order Help </Text>
        </View>

        <View className="bg-white mx-5 my-2 p-6 z-50 rounded-md shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-black text-3xl font-bold">
                45-55 Minutes
              </Text>
            </View>
            <Image
              source={{
                uri: 'https://links.papareact.com/fls',
              }}
              className="h-20 w-20"
            />
          </View>

          <progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
