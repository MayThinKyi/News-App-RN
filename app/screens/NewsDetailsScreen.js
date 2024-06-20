import { View, StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import NewsDetailsTopBar from '../components/NewsDetailsTopBar';
import AppLoading from '../components/AppLoading';
 

const NewsDetailsScreen = ({route}) => {

  const news=route.params?.news;
   return (
    <View style={styles.container}>
      <NewsDetailsTopBar news={news} />
        <WebView source={{uri:news?.url}}  style={{flex:1}}
       startInLoadingState={true}
       renderLoading={()=><View  style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
        <AppLoading/>
        </View>}
        />
      </View>
  )
}

export default NewsDetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
     backgroundColor:'white'
  }
})