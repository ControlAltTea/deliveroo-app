import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => { 
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView>
            <Text className="text-red-500">HomeScreen</Text>
            {/* HEADER */}
            <View>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
            </View>
            <View>
                <Text>Deliver Now!</Text>
                <Text>Current Location</Text>
            </View>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
    }
})

export default HomeScreen