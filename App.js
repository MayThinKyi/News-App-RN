 import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
 import NewsContext from './app/contexts/NewsContext'
import storage from './app/storage'
import AppStacks from './app/navigation/AppStacks'
   
const App = () => {
  const [savedNews,setSavedNews]=useState([]);
  const getUserSavedNews=async()=>{
   const news=await storage.getSavedNews()
    if(news) setSavedNews([...news]);
   }
   useEffect(()=>{
    getUserSavedNews()
   },[])
  return (
    <NewsContext.Provider value={{savedNews,setSavedNews}} >
     <NavigationContainer>
      <AppStacks/>
     </NavigationContainer>
    </NewsContext.Provider>
  )
}

export default App