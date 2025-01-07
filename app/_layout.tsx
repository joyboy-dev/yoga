import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'react-native';  // Import useColorScheme to detect theme

const RootLayout = () => {


  return (
    <>
      <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      
      </Stack>
    
      <StatusBar 
        hidden={false} 
        barStyle={ 'dark-content'} 
        />
    </>
  );
};

export default RootLayout;
