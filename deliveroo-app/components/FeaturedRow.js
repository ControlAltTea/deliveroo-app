import React, {useEffect, useState} from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import client, { urlFor } from '../sanity/sanity.cli';
import restaurant from '../sanity/schemas/restaurant';
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type=="featured" && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                name
            }
        },
      }[0]`,
        { id })
      .then((data) => {
        setRestaurants(data?.restaurants)
      })
      .catch(err => {
        //Any error occurs in json parsing or after fetching data will jump to here
        console.log(err);
      })
  }, [id]);
  
  return (
      <View>
          <View className="mt-4 flex-row items-center justify-between px-4">
              <Text className="font-bold text-lg">{title}</Text>
              <ArrowRightIcon color="#00CCB8"/>
          </View>
          <Text className="text-xs text-gray-500 px-4">
              {description}
          </Text>
          <ScrollView
              horizontal
              contentContainerStyle={{
                  paddingHorizontal:15,
              }}
              showsHorizontalScrollIndicator={false}
              className="pt-4"
          >
    
        {/* RestaurantCards... */}
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            />    
            )
        )}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow