import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatagoryItem from './src/components/CatagoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header />
      <Search />
      <CatagoryItem />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
