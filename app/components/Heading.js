import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const Heading = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} >{heading}</Text>
      <Text style={styles.viewAll} >View All</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    heading:{
        fontSize:19,
        fontWeight:'700',
        color:colors.green
    },
    viewAll:{
        fontWeight:'600',
        color:'#616060'
    }
})