import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import categories from '../utils/categories'
import colors from '../utils/colors'

const Categories = ({selectedCategory,setSelectedCategory}) => {
    
  return (
   <View style={{marginVertical:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
      {categories.map((category,index)=>{
        return <Pressable 
        onPress={()=>setSelectedCategory(category.value)} key={index} 
        style={[styles.category,
        {backgroundColor:selectedCategory===category.value ? colors.green :colors.gray}]}>
            <Text style={{color:selectedCategory===category.value ?'white' :'black'}}>{category.name}</Text>
        </Pressable>
      })}
    </ScrollView>
   </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    categoriesContainer:{
       height:32,
       gap:5
    },
    category:{
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:15
    }
})