import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles';


const RestaurantItem = ({rest}) => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <Image
        style={styles.image}
        source={{
          uri: rest.image_url,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{rest.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{rest.rating}</Text>
          <Text style={styles.money}>{rest.price}</Text>
        </View>
      </View>
    </View>
  );
}

export default RestaurantItem

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: 'white',
        height: 100,
         alignSelf: 'stretch',
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems:'center'
    
    }, image: {
        width: 75,
        height: 75,
        borderRadius:50,marginLeft:10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
        
    }
    , header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom:4
    },
    info: {
        flexDirection: 'row',
        
    }
    ,
    rating: {
        marginRight:20
    },
    money: {
       
        color:"gold"
    }

    
})