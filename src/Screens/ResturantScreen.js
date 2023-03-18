import { FlatList, Image, StyleSheet, Text, View,ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import useRest from '../hooks/useRest'

const ResturantScreen = ({ navigation }) => {
    const[{data,loading,error},searchResturant]=useRest()
    const id = navigation.getParam("id")
    
    const dimensions = Dimensions.get("window");
    const imagewidth = dimensions.width
    const imageHeight=Math.round((dimensions.height *9)/16)
    useEffect(() => {
        searchResturant(id)
        
        
        
    }, [id])
   
   if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
   if (error)
     return (
       <View style={styles.container}>
         <Text style={styles.header}>{error}</Text>
       </View>
     );
    
   
  return (
      <View>
          {data && (
              <FlatList
        data={data}
        keyExtractor={(photo) => photo}
        
        renderItem={({ item }) => {
          return <Image source={{uri:item}} style={{width:imagewidth,height:imageHeight}} />;
        }}
      />
          )}
      
    </View>
  );
}

export default ResturantScreen

const styles = StyleSheet.create({
    image: {
        height: 60,
        width:70
        
    }
})