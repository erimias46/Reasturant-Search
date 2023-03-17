import { StyleSheet, Text, View, FlatList } from 'react-native'

import React from 'react'
import CatagoryItem from './CatagoryItem';

const Catagories = ({catagories,setTerm,term}) => {
  return (
    <FlatList
      horizontal
      data={catagories}
      renderItem={({ item, index }) => {
        return (
          <CatagoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => {
              setTerm(item.name);
            }}
          />
        );
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(catagory) => {
        catagory.name;
      }}
    />
  );
}

export default Catagories

const styles = StyleSheet.create({})