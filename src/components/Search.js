import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'


const Search = ({setTerm}) => {
  const [input, setInput] = useState()
  const handleEndEditing = () => {
    if (!input)
      return
    setTerm(input)
    setInput('')
  }
  
  return (
    <View style={[styles.container,styles.elevation]}>
      <FontAwesome name="search" size={25} />
    
      <TextInput style={styles.input}
        placeholder="Restaurants,food"
        value={input}
       
        onChangeText={(event) => {
        setInput(event)
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

export default Search

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
     marginTop:5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius:40
    },
    elevation,
  input: {
    height: 40,
    padding: 10,
      fontSize: 20,
    marginLeft:10,
    borderRadius: 15,
   
  },
});