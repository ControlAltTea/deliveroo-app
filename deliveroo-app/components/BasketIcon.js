import React from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

export const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal);
    return (
        <View>
            <Text>BasketIcon</Text>
        </View>
    )
}
