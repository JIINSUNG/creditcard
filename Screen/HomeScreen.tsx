import { StyleSheet, View,Text,Button } from "react-native"
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';


export default function App({navigation}:any) {

    return (
        <View style={styles.container}>
        <Text>극한의 이득춘</Text>
        <Text onPress={() => {navigation.navigate("Register")}}>회원가입화면으로</Text>
        <Text onPress={() => {navigation.navigate("Login")}}>로그인화면으로</Text>
        <Text onPress={() => {navigation.navigate("Mysql")}}>DB화면으로</Text>

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