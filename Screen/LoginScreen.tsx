import { View,Text,StyleSheet,Button, Alert,TextInput } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";



export default function LoginScreen({navigation}:any) {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState("");
    const Login = ()=> {
        signInWithEmailAndPassword(auth, text, number)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          Alert.alert("로그인 성공")
          navigation.navigate("Main")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage)
        });
    
      }
  return (
    <View style = {styles.container}>
    <View>
      <Text>아이디</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>비밀번호</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
      />
      <Button title = "로그인 하기" onPress = {Login}></Button>
    </View>
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
    input: {
        height: 40,
        width : 250,
        marginVertical : 10,
        borderWidth: 1,
        padding: 10,
      },

  });
  