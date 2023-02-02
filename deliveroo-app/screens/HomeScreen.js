import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity/sanity.cli';
import category from '../sanity/schemas/category';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

    const query = `*[_type=="featured"] {
             ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                name
            }
        },
    }`;    

  useEffect(() => {
      client
        .fetch(query)
        .then((data) => {
             setFeaturedCategories(data);
        });
  }, [0]);

    console.log(featuredCategories);
    
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View className='flex flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className={` flex-1`}>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon className='items-center' size={35} color='#00CCBB' />
      </View>

      {/* SEARCH */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-1 flex-row space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
            color='red'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCB8' size={20} />
      </View>

      {/* BODY */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* COMPONENT -CATEGORIES */}
              <Categories />
              {/* featured */}
              {featuredCategories?.map((category) => {
                  <FeaturedRow
                      key={category._id}
                      id={category._id}
                      title={category.name}
                      description={category.short_description}
                  />                  
              })}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
  },
});

export default HomeScreen;
