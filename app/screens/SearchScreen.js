import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../components/AppInput'
import useApi from '../hooks/useApi';
import AppLoading from '../components/AppLoading';
import NewsItem from '../components/NewsItem';
import routes from '../routes';

const SearchScreen = ({navigation}) => {
   const [search,setSearch]=useState('');
  const {data,loading}=useApi(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity`)
  return (
    <View style={styles.container}>
      <AppInput input={search} setInput={setSearch} />
      {search.trim().length>0 && <Text style={styles.searchResult} >News for {search}</Text>}
       {search && loading && <AppLoading/> }
      {search &&  !loading && <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    data={data}
    keyExtractor={(item,index)=>item.title+' '+index}
    renderItem={({item})=><NewsItem onPress={()=>navigation.navigate(routes.NEWS_DETAILS,{news:item})} news={item} />}
      />}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:10
  },
  searchResult:{
    fontSize:16,
    fontWeight:'600',
    marginBottom:8
  }
})