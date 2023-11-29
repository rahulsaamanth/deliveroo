import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {ChevronRightIcon, ShareIcon} from 'react-native-heroicons/solid';

const NewsEvents = () => {
  return (
    <View>
      <View className="flex flex-row items-center justify-between mx-4 py-2">
        <Text className="text-white font-bold text-[16px]">
          News and Events
        </Text>
        <ChevronRightIcon color={'white'} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        <TouchableOpacity className="bg-white/50 py-2 px-2 space-x-2 flex flex-row justify-evenly rounded-lg mr-2">
          <Image
            source={require('../assets/temple5.jpg')}
            style={{height: 60, width: 60}}
            className="rounded-lg"
          />
          <Text className="text-red-900 font-bold pr-12">
            Tirupathi Train Timings 2023
          </Text>
          <ShareIcon color="red" size={20} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white/50 py-2 px-2 space-x-2 flex flex-row justify-evenly rounded-lg">
          <Image
            source={require('../assets/temple2.jpg')}
            style={{height: 60, width: 60}}
            className="rounded-lg"
          />
          <Text className="text-red-900 font-bold pr-12">
            Bonalu 2023 Dates
          </Text>
          <ShareIcon color="red" size={20} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewsEvents;
