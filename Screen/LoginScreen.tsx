import { View,Text,StyleSheet,Button, Alert,TextInput } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";



export default function LoginScreen({navigation}:any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //@인성 사용자가 이메일, 비밀번호를 입력후 로그인버튼을 누르면 
    //해당 정보가 파이어베이스 서버에 있는지 확인후 로그인 수행
    //로그인 성공시 메인페이지로 이동, 실패시 실패이유를 알림창으로 띄워줌
    const Login = ()=> {
        signInWithEmailAndPassword(auth, email,password)
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
  