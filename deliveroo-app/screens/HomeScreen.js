import { useWindowDimensions, View, Text, Image, StyleSheet, Platform, StatusBar, TextInput, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                {/* HEADER */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="android:flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>
                        <Text className="font-bold text-xl">
                            Current Location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB"/>
                </View>

                {/* SEARCH */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                    <View className="w-[300px] flex-row space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput
                            placeholder='Restaurants and Cuisines'
                            keyboardType='default'
                            color="red"/>
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCB8" size={20} />
                </View>
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    }
})

export default HomeScreen