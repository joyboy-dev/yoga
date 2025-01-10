import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { router } from 'expo-router'
import WelcomePage from './WelcomePage'

const Entrypoint = () => {
    // const [valuechange, setvaluechange] = useState(false)
    // useEffect(() => {
    //  const settime =  setTimeout(() => {
    //     setvaluechange(true)
    //      router.push('/(tabs)')
    //   }, 2000);
    //   return ()=> clearTimeout(settime);
    // }, [valuechange])
    

  return (
    <View style={{backgroundColor:"black", flex:1}}>
      <WelcomePage></WelcomePage>
    </View>
  )
}

export default Entrypoint

const styles = StyleSheet.create({})

