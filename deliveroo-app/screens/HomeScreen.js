import { useWindowDimensions, View, Text, Image, StyleSheet, Platform, StatusBar, TextInput, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

let screenWidth;

const HomeScreen = () => {
    const navigation = useNavigation();
    const { height, width, scale, fontScale } = useWindowDimensions();
    screenWidth = width;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                {/* HEADER */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className={styles.view}>
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl">Current 
                        Location
                            <ChevronDownIcon size={20} color="#00CCB8"/>
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCB8"/>
                </View>

                {/* SEARCH */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput placeholder='Restaurants and Cuisines'
                        keyboardType='default'/>
                    </View>
                    <AdjustmentsVerticalIcon />
                </View>
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
    view: {
        flex: 1,
    }
})

export default HomeScreen