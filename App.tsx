import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false; 

import HomeScreen from './Screen/HomeScreen'

const Stack = createNativeStackNavigator();

//스플래시 스크린이 띄운다
SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // API 로드 대기 후 로드 완료시 스플래시 스크린을 치운다
        // 초기버전에서는 따로 로드할 자원이 많지 않기때문에 2초 대기후 띄움
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();      
      }
    } 
    prepare()},[]
    )
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}   />
      </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});