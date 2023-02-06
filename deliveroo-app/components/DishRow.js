import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DishRow = ({
  id,
  name,
  description,
  price,
  image
}) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>
            {name}
          </Text>
          <Text>
            {description}
          </Text>
        </View>
        <Text>DishRow</Text>            
      </TouchableOpacity>
  )
}

export default DishRow