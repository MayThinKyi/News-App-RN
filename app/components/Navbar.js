import { View, Text, StyleSheet, Pressable } from 'react-native'
import React  from 'react'
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
import {  Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const navigation=useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title} >Native News</Text>
        <Pressable onPress={()=>navigation.navigate(routes.SEARCH)}>
        <Ionicons name="search" size={24} color="gray" />
        </Pressable>
      </View>
     </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10,
    },
    title:{
        fontSize:23,
        fontWeight:'800',
        color:colors.green
    }
})