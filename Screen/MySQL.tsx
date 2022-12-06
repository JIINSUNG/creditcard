import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";




export default function MysqlScreen({navigation}:any) {
 const [data,setData] = useState("")

  
  return (
    <View style = {styles.container}>
        <Text>Hello</Text>
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
  
 
