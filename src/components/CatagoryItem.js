import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'


export default function CatagoryItem() {
  return (
      <View style={[styles.container, styles.elevation]}>
          <View>
              <Image source={require("../assets/images/burger.png")} style={styles.image} />
          </View>
          <Text> Burger</Text>
          
  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 15,
        marginVertical: 15,
        marginHorizontal:25,
        backgroundColor: 'white',
        alignItems:"center",
        justifyContent: "center",
        borderRadius:80
    },
    elevation,
    image: {
        width: 35,
        height:35
    }
})