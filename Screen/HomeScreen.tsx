import { StyleSheet, View,Text,Button } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Image } from "react-native";
import * as React from 'react';


export default function App({navigation}:any) {

    return (
        <View style={styles.container}>
        <Image style={{width:200, height:200}} source={require('../assets/splash.png')}/>        
        <Text>누르기만 하면 알수있는 최고의 할인수단</Text>
        <Text>극한의 이득춘</Text>
        <Text onPress={() => {navigation.navigate("Register")}}>회원가입화면으로</Text>
        <Text onPress={() => {navigation.navigate("Login")}}>로그인화면으로</Text>
        <Text onPress={() => {navigation.navigate("Mysql")}}>DB화면으로</Text>
        <Text onPress={() => {navigation.navigate("Store")}}>스토어리스트로</Text>

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
  });