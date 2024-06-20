import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { LinearGradient } from 'expo-linear-gradient';
import routes from '../routes';

const WelcomeScreen = ({navigation}) => {
  return (
     <ImageBackground resizeMode='cover'
    source={require('../assets/reporter.png')}
    style={styles.background}
    >
       <LinearGradient  
        colors={['transparent','rgba(0,0,0,0.9)']} 
        style={{height:'100%',width:'100%'}}
        >
      <View style={styles.welcomeContent} >
        <Text style={styles.title} >Stay Informed from Day One</Text>
        <Text style={styles.subTitle} >Discover the latest news with our sameless Onboarding Experience</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.MAIN)} activeOpacity={0.9} style={[styles.button,{backgroundColor:colors.green}]}>
          <Text style={styles.btnText} >Get Started</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </ImageBackground>
   
   
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  background:{
    flex:1
  },
  welcomeContent:{
    padding:20,
    position:'absolute',
    bottom:30,
    left:0,
    right:0
  },
  title:{
    fontSize:28,
    fontWeight:'800',
    color:'white',
    textAlign:'center',
   },
  subTitle:{
    fontSize:19,
    fontWeight:'700',
    color:'white',
    textAlign:'center',
    marginVertical:10
  },
  button:{
    marginTop:20,
    borderRadius:25,
    padding:12,
    width:'100%',
    textAlign:'center'
  },
  btnText:{
    color:'white',
    textAlign:'center',
    fontSize:18,
    fontWeight:'600'
  },
  
})