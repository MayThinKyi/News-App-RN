import { View, FlatList } from 'react-native'
import React from 'react'
import Heading from './Heading'
import NewsItem from './NewsItem'
import useApi from '../hooks/useApi'
import AppLoading from './AppLoading'
import { useNavigation } from '@react-navigation/native'
import routes from '../routes'

const RecommendedNews = () => {
  const navigation=useNavigation();
  const {data,loading} =useApi('/top-headlines?country=us&category=business');
     return (
   <>
     <View style={{flex:1}}>
    <Heading heading={'Recommended News'} />
    {loading ? <AppLoading/> : <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    data={data}
    keyExtractor={(item,index)=>item.title+' '+index}
    renderItem={({item})=><NewsItem onPress={()=>navigation.navigate(routes.NEWS_DETAILS,{news:item})} news={item} />}
      />}
  </View>
   </>
  )
}

export default RecommendedNews