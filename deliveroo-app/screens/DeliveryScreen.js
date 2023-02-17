import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className="bg-[#00CCB8] flex-1">
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text>Order Help</Text>
                </View>
            </SafeAreaView>
        </View>
        )
}

export default DeliveryScreen