import { View, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Navbar from './Navbar'
  
const Screen = ({children}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}  />
        <Navbar/>
        {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        flex:1,
        backgroundColor:'white'
    }
})