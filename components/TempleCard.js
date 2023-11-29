import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MapPinIcon} from 'react-native-heroicons/outline';

const TempleCard = ({id, image, title, location, distance}) => {
  return (
    <TouchableOpacity className="bg-white/50 mx-1 flex flex-row items-center justify-evenly px-2 py-2 space-x-3 rounded-lg">
      <Image
        source={image}
        style={{height: 60, width: 60}}
        className="rounded-lg"
      />
      <View className="flex flex-col justify-between items-center">
        <Text className="text-red-900 font-bold">{title}</Text>
        <View className="flex flex-row items-center justify-center">
          <MapPinIcon color={'red'} size={20} />
          <Text className="text-gray-800">{location}</Text>
        </View>
      </View>
      <View className="bg-red-600 left-2 -bottom-7 rounded-tl-lg p-1">
        <Text className="text-white">{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TempleCard;
