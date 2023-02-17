import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen")
        }, 4000)
    }, []);

    return (
        <SafeAreaView style={styles.container} className="bg-[#00CCB8] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/deliveryGif.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for {restaurant.title} to accept your order!
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
});


export default PreparingOrderScreen