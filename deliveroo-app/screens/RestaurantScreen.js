import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import {
    ArrowLeftIcon
} from 'react-native-heroicons/solid';
import { urlFor } from '../sanity/sanity.cli';


const RestaurantScreen = () => {
    const navigation = useNavigation();

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className="relative">
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity>
                    <ArrowLeftIcon
                        size={20}
                        color="#00CCBB"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
});

export default RestaurantScreen