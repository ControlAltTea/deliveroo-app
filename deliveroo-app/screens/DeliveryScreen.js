import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { XIcon } from "react-native-heroicons/solid";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCB8] flex-1">
            <SafeAreaView style={styles.container} className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className=
                "bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-2xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls"
                            }}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar
                        size={30}
                        color="#00CCB8"
                        indeterminate={true}
                    /> 
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    // latitudeDelta: 0.005,
                    // longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
            >
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    
});

export default DeliveryScreen