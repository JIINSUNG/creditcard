import { createUserWithEmailAndPassword } from "firebase/auth";
import {app, auth} from '../Firebase/Firebase'
import { View,Text,StyleSheet,Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";




export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //@인성 사용자가 입력한 이메일,비밀번호를 이용한 회원등록 함수, 정상적인 등록 완료시 회원가입완료 팝업창을 띄워준다 
    const Register = ()=> {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert("회원가입 완료")
        // ...  
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Alert.alert(errorMessage)

        });
    
      }
  return (
    <View style = {styles.container}>
    <View>
      <Text>아이디</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text>비밀번호</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder=""
      />
      <Button title = "회원 가입하기" onPress = {Register}></Button>
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
  