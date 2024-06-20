import {  ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const AppLoading = () => {
  return (
     <ActivityIndicator size={50} color={colors.green} />
   )
}

export default AppLoading