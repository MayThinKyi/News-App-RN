import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import {  Feather, FontAwesome } from '@expo/vector-icons';
import useSavedNews from '../hooks/useSavedNews';
import storage from '../storage';
import colors from '../utils/colors';
const NewsItem = ({news,onPress}) => {
  const {savedNews,setSavedNews}=useSavedNews();
   const removeSingleNewsHandler=()=>{
    const updatedNews=savedNews.filter((item)=>item.title!==news.title);
    setSavedNews([...updatedNews]);
    storage.savedNews(updatedNews)
  }
  const isNewsExist=()=>savedNews.filter((item)=>item.title===news.title).length>0
   return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.newsContent}>
         <Image style={styles.img} source={{uri:news?.urlToImage || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}} />
        <View>
            <Text style={styles.author} >{news?.author}</Text>
            <Text numberOfLines={2} style={styles.title}>{news?.title}</Text>
            <Text style={styles.createdAt} >{new Date(news?.publishedAt).toDateString()}</Text>
        </View>
      </View>
      <Pressable onPress={async()=>{
        if(!isNewsExist()){
        await storage.savedNews([...savedNews,news])
        setSavedNews([...savedNews,news])
        }else removeSingleNewsHandler()
      }} style={{width:'10%'}}>
        { isNewsExist() ? <FontAwesome name="bookmark" size={24} color={colors.green} /> :
        <Feather name="bookmark" size={24} color="black" />
        }</Pressable>
    </Pressable>
  )
}

export default NewsItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:5,
        marginBottom:10
     },
    newsContent:{
        width:'60%',
        flexDirection:'row',
        gap:5,
        alignItems:'center'
    },
    img:{
         width:70,
        height:70,
        borderRadius:15
    },
    title:{
        fontSize:14,
        fontWeight:'600'
    },
    createdAt:{
        fontSize:13,
        color:'gray'
    },
    author:{
        fontSize:13,
        fontWeight:'500'
     }
})