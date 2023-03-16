import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import CatagoryItem from './src/components/CatagoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { useState } from 'react';


export default function App() {
 
  const [term, setTerm] = useState();

  const commonCatagories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Desert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <View>
        <FlatList
          horizontal
          data={commonCatagories}
          renderItem={({ item ,index}) => {
            return <CatagoryItem name={item.name} imageUrl={item.imageUrl} index={index}
              active={item.name === term} handlePress={() => {
                
                setTerm(item.name)
              }} />;
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(catagory) => {
            catagory.name
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  CatagoryItem: {
    flexDirection:'row'
  }
});
