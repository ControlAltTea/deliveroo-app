import { View, Text, Image, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import {
//     UserIcon,
//     ChevronDownIcon,
//     SearchIcon,
//     AdjustmentsIcon,
// } from 'react-native-heroicons/outline';

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
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className={`bg-gray-300 p-4 rounded-full`}
                    />
                    <View>
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl">Current 
                        Location
                            {/* <ChevronDownIcon size={20} color="#00CCB8"/> */}
                        </Text>
                    </View>
                </View>
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    }
})

export default HomeScreen