import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import useSavedNews from '../hooks/useSavedNews'
import colors from '../utils/colors';
import storage from '../storage';
import NewsItem from '../components/NewsItem';
import routes from '../routes';

const SavedScreen = ({navigation}) => {
  const {savedNews,setSavedNews}=useSavedNews();
  return (
    <View style={styles.container}>
      <View style={styles.topHeading}>
        <Text style={styles.heading}>Saved Articles</Text>
        <Pressable  onPress={async()=>{
          setSavedNews([]);
          await storage.removeAllNews()
        }} style={styles.clearBtn} >
          <Text style={styles.clearText} >Clear</Text>
        </Pressable>
      </View>
      <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    data={savedNews}
    keyExtractor={(item,index)=>item.title+' '+index}
    renderItem={({item})=><NewsItem onPress={()=>navigation.navigate(routes.NEWS_DETAILS,{news:item})} news={item} />}
      />
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:'white'
  },
 topHeading:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
 },
  heading:{
  fontSize:18,
  fontWeight:'700',
  color:colors.green
},
clearBtn:{
  backgroundColor:colors.green,
  paddingHorizontal:20,
  paddingVertical:8,
  borderRadius:10
},
clearText:{
  color:'white',
  fontSize:15,
  fontWeight:'600'
}
})