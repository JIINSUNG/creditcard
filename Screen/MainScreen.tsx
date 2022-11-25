import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function MainScreen() {

  return (
    <View style = {styles.container}>
        <Text>메인화면입니다</Text>
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
  