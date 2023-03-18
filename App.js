
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/Screens/HomeScreen';


export default function App() {
  const navigator = createStackNavigator({
    
  })
 
 
  return (
    <View style={styles.container}>
     <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    
  },
  
});
