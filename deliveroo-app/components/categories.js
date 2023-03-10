import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import client, { urlFor } from '../sanity/sanity.cli';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type=="category"]
    `)
      .then((data) => {
        setCategories(data);
    })
  }, [])

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
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}

export default Categories;