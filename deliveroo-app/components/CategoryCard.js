import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-[10px] w-[10px] p-4 rounded-full"
            />
            <Text className="absolute bottom-1 left-1 text-red font-bold">{title}</Text>
        </TouchableOpacity>
    );
}

export default CategoryCard