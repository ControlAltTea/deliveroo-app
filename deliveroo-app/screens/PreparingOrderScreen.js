import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import * as Animatable from "react-native-animatable"

const PreparingOrderScreen = () => {
  return (
      <SafeAreaView style={styles.container} className="bg-[#00CCB8] flex-1 justify-center items-center">
          <Animatable.Image
              source={require("../assets/deliveryGif.gif")}
              animation="slideInUp"
              iterationCount={1}
              className="h-96 w-96"
          />
          
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 5,
    },
});


export default PreparingOrderScreen