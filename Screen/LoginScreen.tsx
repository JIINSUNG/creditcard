import { View,Text,StyleSheet,Button, Alert,TextInput,SafeAreaView,Image } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";



export default function LoginScreen({navigation}:any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //@인성 이메일, 비밀번호 입력후 로그인버튼을 누르면 로그인 시도 
    //서버에서 사용자 정보 확인후 성공시 메인페이지로 이동, 실패시 메세지를 띄워줌
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
<SafeAreaView style = {styles.container}>
    <View style = {styles.banner}>
    <View>
    <Image source={require('../assets/splash.png')} style = {{width :40, height : 40}}></Image>
    <Text style = {styles.bannertitle}>극한의 이득춘</Text>
    </View>
    <View><Text style = {styles.bannertitle}>메뉴</Text></View>
      
    </View>
    <View style = {{flex : 9, alignItems : "center", }}>
      <Text style = {styles.maintitle}>회원정보를 입력해주세요</Text>
      <Text>아이디를 입력해주세요</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text>비밀번호를 입력해주세요</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder=""
      />
      <Button title = "로그인하기" onPress = {Login}></Button>
    </View>
    </SafeAreaView>
  )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    banner :
    {
      flex : 1, flexDirection : "row", alignItems : "center", justifyContent : "space-between", marginHorizontal : 20, 
    },
    maintitle :
    {
      fontSize : 25,
      fontWeight : "bold",
      marginVertical : 30,
    },
    bannertitle :
    {
      fontSize : 18,
      fontWeight : "bold",
    },
    input: {
        height: 40,
        width : 250,
        marginVertical : 10,
        borderWidth: 1,
        padding: 10,
      },

      

  });
  