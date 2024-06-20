import AsyncStorage from "@react-native-async-storage/async-storage"

const key='Saved News';
//Multiple News
const savedNews=async(news)=>{
    try {
         await AsyncStorage.setItem(key,JSON.stringify([...news]))
    } catch (error) {
        console.log('Error saving News ',error)
    }
}
const getSavedNews=async()=>{
    try {
       const news=await AsyncStorage.getItem(key);
       return JSON.parse(news); 
    } catch (error) {
        console.log('Error when getting Saved News ',error)
    }
};
const removeAllNews=async()=>{
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error when removing all news ',error)
    }
}


export default {
    savedNews,getSavedNews,removeAllNews
}