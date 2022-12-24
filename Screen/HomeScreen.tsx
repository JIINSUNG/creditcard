import { StyleSheet, View,Text,Button } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Image } from "react-native";
import * as React from 'react';


export default function App({navigation}:any) {

    return (
      //@인성 화면중단 브랜드로고 노출
      //@인성 회원가입을 누르면 등록화면으로, 로그인하기를 누르면 로그인화면으로 이동 
        <View style={styles.container}>
        <Image style={{width:200, height:200}} source={require('../assets/splash.png')}/>
        <View style = {{alignItems : "center", justifyContent : "center"}}>
        <Text style = {styles.maintitle}>당신만을 위한 최고의 혜택 알리미</Text>
        <Text style = {styles.mainsubtitle}>극한의 이득춘</Text>
        </View>
        
        <View style = {styles.button}>
        <Text style = {styles.buttontitle} onPress={() => {navigation.navigate("Register")}}>회원가입 하기</Text>
        </View>
        <View style = {styles.button}><Text style = {styles.buttontitle} onPress={() => {navigation.navigate("Login")}}>로그인 하기</Text></View>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintitle :
    {
      fontSize : 30,
      fontWeight : "bold",
    },
    mainsubtitle :
    {
      fontSize : 20,
    },
    button :
    {
      backgroundColor : "blue",
      width : 200,
      height : 50,
      borderRadius : 10,
      alignItems : "center",
      justifyContent : "center",
      margin : 10,
    },
    buttontitle:
    {
      color : "white",
      fontSize : 20,
    }
  });