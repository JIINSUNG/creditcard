import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {app, auth} from './Firebase/Firebase'

import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen'
import LoginScreen from './Screen/LoginScreen';
import MainScreen from './Screen/MainScreen';

if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false;


const Stack = createNativeStackNavigator();






//스플래시 스크린이 띄운다
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

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
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>

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
