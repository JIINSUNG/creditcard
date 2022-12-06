import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function InformationScreen({navigation,route}:any) {
  //@인성 가맹점에 대한 정보와 가장 혜택이 좋은 것이 무엇인지를 알려주는 페이지 
  return (
    <View style = {styles.container}>
      <Text>입력하신 값은 {route.params.title} 입니다</Text>
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
  