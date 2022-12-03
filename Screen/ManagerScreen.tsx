import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function ManagerScreen() {

  return (
    <View style = {styles.container}>
      <Text>카드 설계사 페이지</Text>
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
  