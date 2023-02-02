import React, {useEffect, useState} from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import client from '../sanity/sanity.cli';
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
   
  const query = `*[_type=="featured" && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                name
            }
        },
      }[0]`

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
    }, [])
    
  console.log(`restaurants`, restaurants);

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
              {/* <RestaurantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St."
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
              /> */}
          </ScrollView>
    </View>
  )
}

export default FeaturedRow