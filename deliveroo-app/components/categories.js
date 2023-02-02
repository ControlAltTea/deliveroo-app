import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CATEGORY CARD */}
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Sushi 1"
      />
     
    </ScrollView>
  )
}

export default Categories;