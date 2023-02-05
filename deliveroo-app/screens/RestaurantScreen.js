import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import {
    ArrowLeftIcon,
    StarIcon,
    MapPinIcon
} from 'react-native-heroicons/solid';
import {
    UserIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
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
                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon
                        size={20}
                        color="#00CCBB"
                    />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating} </Text>. {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color="gray" opacity={0.5} size={22} />
                            <Text className="text-green-500">Nearby  </Text>. {address}
                        </View>
                    </View>
                    <Text
                        className="text-gray-500 mt-2 pb-4"
                    >
                        {short_description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <QuestionMarkCircleIcon
                            color="gray"
                            opacity={0.6}
                            size={20}    
                        />
                        <ChevronRightIcon
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