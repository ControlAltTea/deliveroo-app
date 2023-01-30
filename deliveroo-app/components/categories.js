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
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Sushi 2"
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Sushi 3"
      />
      {/* CATEGORY CARD */}
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Testing 1"
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Testing 2"
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7' title="Testing 3"
      />
    </ScrollView>
  )
}

export default Categories;