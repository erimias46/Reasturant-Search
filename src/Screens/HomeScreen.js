import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Search from '../components/Search';
import Catagories from '../components/Catagories';
import Restaurants from '../components/Restaurants';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {

      const [term, setTerm] = useState("Burger");

      const commonCatagories = [
        {
          name: "Burger",
          imageUrl: require("../assets/images/burger.png"),
        },
        {
          name: "Pizza",
          imageUrl: require("../assets/images/pizza.png"),
        },
        {
          name: "Desert",
          imageUrl: require("../assets/images/cake.png"),
        },
        {
          name: "Drinks",
          imageUrl: require("../assets/images/smoothies.png"),
        },
        {
          name: "Steak",
          imageUrl: require("../assets/images/steak.png"),
        },
        {
          name: "Pasta",
          imageUrl: require("../assets/images/pasta.png"),
        },
      ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Catagories setTerm={setTerm} term={term} catagories={commonCatagories} />
    <Restaurants term={term} />

      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgb(253,253,253)'
    }
})