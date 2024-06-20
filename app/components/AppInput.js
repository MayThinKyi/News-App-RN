import { View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import { AntDesign } from '@expo/vector-icons'

const AppInput = ({input,setInput}) => {
  const [query,setQuery]=useState(input);
   return (
    <View style={styles.inputContainer}>
        <AntDesign name="search1" size={21} color="black" />
      <TextInput value={query} onChangeText={(text)=>setQuery(text)} 
      onSubmitEditing={()=>setInput(query)}  style={styles.input} placeholder='Search News' />
    </View>
  )
}

export default AppInput

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:10,
        backgroundColor:colors.gray,
        padding:15,
        borderRadius:25
    },
    input:{
        marginLeft:8
    }
})