import { useNavigation } from '@react-navigation/native'
import React, {useMemo} from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    
    useMemo(() => {
        
    }, [items]);

    return (
        <View>
            <Text>BasketScreen</Text>
        </View>
    )
}

export default BasketScreen