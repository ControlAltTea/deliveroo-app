import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className="bg-[#00CCB8] flex-1">
            <SafeAreaView style={styles.container} className="flex-row justify-between items-center p-5">
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                
                <View>
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-2xl font-bold">45-55 Minutes</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
});

export default DeliveryScreen