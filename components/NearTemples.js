import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import TempleCard from './TempleCard';

const NearTemples = () => {
  const templesData = [
    {
      id: 1,
      image: require('../assets/temple1.jpg'),
      title: 'Sri Subrahmanyam temple',
      location: 'Warasiguda, Secuderabad',
      distance: '9 kms',
    },
    {
      id: 2,
      image: require('../assets/temple2.jpg'),
      title: 'Aanganeya swamy temple',
      location: 'Warasiguda, Secuderabad',
      distance: '20 kms',
    },
    {
      id: 3,
      image: require('../assets/temple3.jpg'),
      title: 'Sri Jagannatha temple',
      location: 'puri, odisha',
      distance: '900 kms',
    },
    {
      id: 4,
      image: require('../assets/temple5.jpg'),
      title: 'Tirupathi Balaji temple',
      location: 'Tirupathi, Andrapradesh',
      distance: '253 kms',
    },
    {
      id: 5,
      image: require('../assets/temple4.jpg'),
      title: 'Lotus temple',
      location: 'Kalkaji, New Delhi',
      distance: '1518 kms',
    },
  ];

  return (
    <View className="my-2">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-white text-[16px] font-bold">
          Temples Nearby You
        </Text>
        <ChevronRightIcon size={25} color="white" />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}>
        {templesData.map(temple => (
          <TempleCard
            key={temple.id}
            id={temple.id}
            image={temple.image}
            title={temple.title}
            location={temple.location}
            distance={temple.distance}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NearTemples;
