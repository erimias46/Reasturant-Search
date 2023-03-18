import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles';
import {withNavigation} from 'react-navigation'


const RestaurantItem = ({rest,navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Resturant", { id: rest.id })}
    >
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
    </TouchableOpacity>
  );
}

export default withNavigation(RestaurantItem)


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