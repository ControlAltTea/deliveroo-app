import React from 'react'
import Currency from 'react-currency-formatter'
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
          <Text>
            <Currency
              quantity={price}
              currency="USD"
            />
          </Text>
        </View>
       </TouchableOpacity>
  )
}

export default DishRow