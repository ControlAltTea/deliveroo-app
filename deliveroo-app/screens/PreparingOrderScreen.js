import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'

const PreparingOrderScreen = () => {
  return (
      <SafeAreaView style={styles.container} className="bg-[#00CCB8] flex-1 justify-center items-center">
          <Text>
              PreparingOrderScreen 
          </Text>
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