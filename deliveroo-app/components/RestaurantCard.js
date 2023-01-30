import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity>
        <Image
              source={{
                uri: imgUrl,
              }}
              className="h-36 w-36 rounded-sm"
          />  
          <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2">{title}</Text>
              <View></View>
          </View>
    </TouchableOpacity>
    )
}

export default RestaurantCard