import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Carousel = () => {
  const flatListRef = useRef();

  const screenWidth = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll

  const carouselData = [
    {
      id: 1,
      image: require('../assets/temple1.jpg'),
    },
    {
      id: 2,
      image: require('../assets/temple2.jpg'),
    },
    {
      id: 3,
      image: require('../assets/temple3.jpg'),
    },
    {
      id: 4,
      image: require('../assets/temple4.jpg'),
    },
    {
      id: 5,
      image: require('../assets/temple5.jpg'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <Image
        source={item.image}
        style={{
          height: 150,
          width: screenWidth - 8,
        }}
        className="rounded-2xl mx-1"
      />
    );
  };

  // Dot indicators

  const handleScroll = e => {
    const scrollPosition = Math.floor(e.nativeEvent.contentOffset.x);
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const displayDots = () => {
    return carouselData.map((dot, index) =>
      activeIndex === index ? (
        <View key={index} className="bg-gray-400 h-2 w-2 rounded-full"></View>
      ) : (
        <View key={index} className="bg-red-900 h-2 w-2 rounded-full"></View>
      ),
    );
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={carouselData}
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        pagingEnabled={true}
        className="z-0 relative"
        onScroll={handleScroll}
      />

      <View className="flex justify-center items-center flex-row gap-4 z-20 absolute bottom-2 left-36">
        {displayDots()}
      </View>
    </View>
  );
};

export default Carousel;
