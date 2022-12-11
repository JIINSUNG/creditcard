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
import CardManageScreen from './Screen/CardManageScreen';
import CardRecommendScreen from './Screen/CardRecommendScreen';
import CommunityScreen from './Screen/CommunityScreen';
import ManagerScreen from './Screen/ManagerScreen';
import MasterScreen from './Screen/MasterScreen';
import MyPageScreen from './Screen/MyPageScreen';
import SettingScreen from './Screen/SettingScreen';
import InformationScreen from './Screen/StoreListScreen';
import MysqlScreen from './Screen/MySQL';
import StorelistScreen from './Screen/StoreListScreen';
//@인성 사용자별 폰트 사이즈에 따라 화면이 깨지는 현상의 발생을 막도록
//폰트 사이즈에 따른 크기가 변경이 되지 않도록 만들어준다
if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false;



const Stack = createNativeStackNavigator();

//@인성 스플래시 스크린이 띄운다
SplashScreen.preventAutoHideAsync();
export default function App() {

  //@인성 useEffect함수를 이용해 App 실행시 자원이 로드되길 기다린 후 2초후 초기화면을 띄워준다
  useEffect(() => {
    async function prepare() {
      try {
          await new Promise(resolve => setTimeout(resolve, 2000));} 
      catch (e) {
        console.warn(e);} 
      finally {
        SplashScreen.hideAsync(); }} 
    prepare()},[])
  return (
    //@인성 스택 네비게이션을 이용하여 페이지간 name을 이용한 페이지 전환이 가능하다 
    //@인성 screenOptions의 headerShown속성을 false로 설정하면 상단에 페이지명 표시를 없앨수 있다, true로 하면 표시 
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="CardManage" component={CardManageScreen}/>
        <Stack.Screen name="Recommend" component={CardRecommendScreen}/>
        <Stack.Screen name="Community" component={CommunityScreen}/>
        <Stack.Screen name="Manager" component={ManagerScreen}/>
        <Stack.Screen name="Master" component={MasterScreen}/>
        <Stack.Screen name="MyPage" component={MyPageScreen}/>
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="Information" component={InformationScreen}/>
        <Stack.Screen name="Mysql" component={MysqlScreen}/>
        <Stack.Screen name="Store" component ={StorelistScreen}/>
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
