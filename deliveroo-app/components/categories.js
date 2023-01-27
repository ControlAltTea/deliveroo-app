import React from 'react'
import { ScrollView, Text, View } from 'react-native'
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
        <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
        <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
        <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>

      </ScrollView>
  )
}

export default Categories;