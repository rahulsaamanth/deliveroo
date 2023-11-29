import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ClockIcon,
  Bars3Icon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/outline';
import {BellIcon, MapPinIcon} from 'react-native-heroicons/solid';
import Carousel from '../components/Carousel';
import NearTemples from '../components/NearTemples';
import Stotras from '../components/Stotras';
import NewsEvents from '../components/NewsEvents';
import {PermissionsAndroid} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

// import mbxGeocoder from '@mapbox/mapbox-gl-geocoder';

const HomeScreen = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // const accessToken =
  //   'pk.eyJ1IjoicmFodWwtc2FhbWFudGgiLCJhIjoiY2xucmZwM3FhMG90ejJrbXpqejRtbnptdSJ9.jQs24ySQVl6pWf1c4IfORw';
  // const geocoder = mbxGeocoder({
  //   accessToken,
  // });

  // geocoder.reverseGeocode(
  //   {
  //     latitude: userLocation.coords.latitude,
  //     longitude: userLocation.coords.longitude,
  //   },
  //   results => {
  //     if (results.features.length > 0) {
  //       const location = results.features[0];
  //       const city = location.context.find(c => c.id.includes('place'));
  //       const state = location.context.find(c => c.id.includes('region'));

  //       console.log(city, state);
  //     }
  //   },
  // );

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Templeguide App Location Permission',
          message: 'Templeguide App needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        Geolocation.getCurrentPosition(info => {
          console.log(
            'you are at',
            info.coords.latitude,
            info.coords.longitude,
          );
        });
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // --------------------------------------------------------------------------------------------------//

  return (
    <SafeAreaView className="bg-[#E58200] pt-2 h-screen">
      {/* Header */}

      <View className="flex-row pb-3 items-center mx-4 space-x-2 top-0 fixed">
        <TouchableOpacity>
          <Bars3Icon
            color="white"
            size={40}
            className="h-7 w-7 rounded-full p-4"
          />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-[24px] text-white">Templeguide.com</Text>
        </View>
        <TouchableOpacity>
          <ClockIcon size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <BellIcon size={35} color="black" />
        </TouchableOpacity>
      </View>

      {/* Body */}

      <ScrollView
        className="bg-[#F4A40F]"
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        <View className="flex flex-row items-center gap-1 ml-3 py-1">
          <MapPinIcon color="white" />
          <Text className="text-white text-[16px]">Hyderabad, Telangana</Text>
        </View>
        {/* Carousel, Temples */}
        <Carousel />

        {/* Temples Near You */}

        <NearTemples />

        {/* Stotras */}

        <Stotras />

        {/* News and Events */}
        <NewsEvents />
      </ScrollView>
      {/* footer */}
      <View className="flex flex-row items-center justify-evenly bg-[#7E1615] bottom-6 py-1  w-full">
        <TouchableOpacity className="flex justify-center items-center gap-2">
          <HomeIcon size={30} color="white" />
          <Text className="text-white">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex justify-center items-center gap-2">
          <MagnifyingGlassIcon size={30} color="white" />
          <Text className="text-white">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex justify-center items-center gap-2">
          <UserIcon size={30} color="white" />
          <Text className="text-white">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex justify-center items-center gap-2">
          <EllipsisVerticalIcon size={30} color="white" />
          <Text className="text-white">More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
