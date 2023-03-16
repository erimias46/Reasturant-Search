import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (

    <View style={styles.container}>
      <Text style={styles.first}>Grab your </Text>
      <Text style={styles.second}> delicious meal!</Text>
    </View>


    
  );
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal:25
    },
  
  first: {
    fontSize: 35,
   
  },
  second: {
    fontSize: 40,
    fontWeight:'bold',
   
   
  },
});