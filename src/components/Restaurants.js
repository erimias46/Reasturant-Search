import { StyleSheet, Text, View ,ActivityIndicator, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import useResturants from '../hooks/useResturants'
import RestaurantItem from './RestaurantItem'

const Restaurants = ({term}) => {

    const [{data,loading,error},searchResturant]=useResturants()

    useEffect(() => {
        searchResturant(term)


        
    }, [term])
    console.log({ data: data })
    if (loading)
        return (<ActivityIndicator size='large' marginVertical={30} />)
    if (error)
        return (<View style={styles.container}>
            <Text style={styles.header}>{eroor}</Text>
        </View>)

    

  return (
    <View style={styles.container}>
          <Text style={styles.header}>Top Restaurants</Text>
          <FlatList
              data={data}
              keyExtractor={(rest) => rest.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                  return (<RestaurantItem  rest={item}/>)
              }}
          
          />
          
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