import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ChevronRightIcon} from 'react-native-heroicons/solid';

const Stotras = () => {
  const stotrasData = [
    {
      id: 1,
      image: require('../assets/laxmi.jpg'),
      title: 'Laxmi Stotram',
    },
    {
      id: 2,
      image: require('../assets/hanuman.jpg'),
      title: 'Hanuman Chalisa',
    },
    {
      id: 3,
      image: require('../assets/krishna.jpg'),
      title: 'Madhurashtakam',
    },
    {
      id: 4,
      image: require('../assets/raama.jpg'),
      title: 'Rama Raksha Stotram',
    },
  ];

  return (
    <View className="bg-red-900 mx-1 rounded-2xl py-2">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-white text-[16px] font-bold">Stotras</Text>
        <ChevronRightIcon color={'white'} />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 10}}
        showsHorizontalScrollIndicator={false}>
        {stotrasData.map(stotra => (
          <TouchableOpacity
            key={stotra.id}
            className="flex flex-col justify-center items-center mx-1 py-1">
            <Image
              source={stotra.image}
              style={{height: 120, width: 120}}
              className="rounded-lg"
            />
            <Text className="text-white">{stotra.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stotras;
