import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useResturants from '../hooks/useResturants'

const Restaurants = ({term}) => {

    const [{data,loading,error},searchResturant]=useResturants()

    useEffect(() => {
        searchResturant(term)


        
    }, [term])
    console.log({data:data})

    

  return (
    <View style={styles.container}>
          <Text style={styles.header}>Top Restaurants</Text>
          <Text>{term}</Text>
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:10
        
    }
    
})