import { View, Text, Pressable, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel';
import Heading from './Heading';
import useApi from '../hooks/useApi';
import AppLoading from './AppLoading';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
 
const BreakingNews = () => {
  const navigation=useNavigation();
     const {data,err,loading}=useApi('/top-headlines?country=us');
    const carouselRef = useRef(null);
    
      const renderItem = ({ item, index }) => {
        return (
          <Pressable  onPress={()=>navigation.navigate(routes.NEWS_DETAILS,{news:item})}>
            <ImageBackground  style={styles.img} source={{uri:item.urlToImage}} >
            <LinearGradient colors={['transparent','rgba(0,0,0,0.9)']} 
        style={{height:'100%',width:'100%'}}>
            <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.subTitle} >{item.author}</Text>
            </View>
             </LinearGradient>
            </ImageBackground>
           </Pressable>
        );
      };
    
   return (
    <View>
      <Heading heading={'Breaking News'} />
      {loading ?  <AppLoading/> :
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.6} 
        contentContainerCustomStyle={{marginTop:15}}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        activeSlideAlignment={'center'}
        
        loop={true}
      />}
     
    </View>
  )
}

export default BreakingNews

const styles = StyleSheet.create({
   
    img:{
        width:190,
        height:150,
        borderRadius:15,
        overflow:'hidden'
    },
    cardContent:{
        position:'absolute',
        bottom:10,
        left:10
    },
    title:{
        color:'white',
        fontWeight:'700',
        fontSize:13
    },
    subTitle:{
        color:'white',
        fontSize:12,
        fontWeight:'600'
    }
})