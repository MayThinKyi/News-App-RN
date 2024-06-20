 import React from 'react'
import Screen from '../components/Screen'
 import BreakingNews from '../components/BreakingNews'
import RecommendedNews from '../components/RecommendedNews'

const HomeScreen = () => {
  return (
    <Screen>
       <BreakingNews/>
       <RecommendedNews/>
    </Screen>
  )
}

export default HomeScreen