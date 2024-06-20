import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
 import colors from '../utils/colors'
 import Categories from '../components/Categories'
 import AppLoading from '../components/AppLoading'
import NewsItem from '../components/NewsItem'
import { useNavigation } from '@react-navigation/native'
import useApi from '../hooks/useApi'
import routes from '../routes'

const DiscoverScreen = () => {
  const navigation=useNavigation();
  const [selectedCategory,setSelectedCategory]=useState('business')
   const {data,loading} =useApi(`/top-headlines?country=us&category=${selectedCategory}`);
    return (<View style={styles.container}>
    <View>
      <Text style={styles.heading}>Discover</Text>
      <Text style={styles.headingText}>Read News From All Over The World</Text>
    </View>
    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    {loading ? <AppLoading/> : <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    data={data}
    keyExtractor={(item,index)=>item.title+' '+index}
    renderItem={({item})=><NewsItem onPress={()=>navigation.navigate(routes.NEWS_DETAILS,{news:item})} news={item} />}
      />}
     </View>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:10
  },
  heading:{
    fontSize:23,
    fontWeight:'700',
    color:colors.green
  },
  headingText:{
    color:'#4e4e4e',
    fontWeight:'500'
  }
})