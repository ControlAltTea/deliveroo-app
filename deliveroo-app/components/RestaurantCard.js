import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

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
    </TouchableOpacity>
    )
}

export default RestaurantCard