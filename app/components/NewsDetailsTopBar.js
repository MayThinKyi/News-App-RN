import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import useSavedNews from '../hooks/useSavedNews'
import storage from '../storage'
import colors from '../utils/colors'

const NewsDetailsTopBar = ({news}) => {
   const {savedNews,setSavedNews}=useSavedNews();
  const isNewsExist=()=>savedNews.filter((item)=>item.title===news.title).length>0
  const removeSingleNewsHandler=()=>{
    const updatedNews=savedNews.filter((item)=>item.title!==news.title);
    setSavedNews([...updatedNews]);
    storage.savedNews(updatedNews)
  }
      const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>{
        console.log(navigation.getState());
          navigation.goBack()}} style={styles.iconContainer}>
         <AntDesign name="left" size={24} color="#5e5c5c" />
        </Pressable>
      <View style={{flexDirection:'row',gap:5}}>
            <View style={styles.iconContainer}>
            <Ionicons name="information" size={24} color="#5e5c5c" />
            </View>
            <Pressable onPress={async()=>{
              if(!isNewsExist()){
                setSavedNews([...savedNews,news]);
              await storage.savedNews([...savedNews,news])
              }else removeSingleNewsHandler()
            }} style={styles.iconContainer}>
               { isNewsExist() ? <FontAwesome name="bookmark" size={24} color={colors.green} /> :
            <Feather name="bookmark" size={24} color="black" />
        }
             </Pressable>
      </View>
    </View>
  )
}

export default NewsDetailsTopBar

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        
    },
    iconContainer:{
        backgroundColor:'#eff1f1',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
        borderRadius:25
    }
})