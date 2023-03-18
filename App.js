
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/Screens/HomeScreen';
import ResturantScreen from './src/Screens/ResturantScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Resturant:ResturantScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);


export default createAppContainer(navigator) 
