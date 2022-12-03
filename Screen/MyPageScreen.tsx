import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function MyPageScreen() {

  return (
    <View style = {styles.container}>
      <Text>마이 페이지 스크린</Text>
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
  