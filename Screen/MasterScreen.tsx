import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function MasterScreen() {

  return (
    <View style = {styles.container}>
      <Text>관리자 페이지</Text>
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
  