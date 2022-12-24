import { createUserWithEmailAndPassword } from "firebase/auth";
import {app, auth} from '../Firebase/Firebase'
import { View,Text,StyleSheet,Button, Alert,Image, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";




export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //@인성 사용자가 입력한 이메일,비밀번호를 이용하여 회원등록, 
    //정상적으로 등록시 회원가입완료 팝업을, 오류가 났다면 오류메세지를 띄워줌 
    const Register = ()=> {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert("회원가입 완료")
        })
        .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
      <Text style = {styles.maintitle}>회원가입을 진행해주세요</Text>
      <Text>사용할 아이디를 입력해주세요</Text>
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
      <Button title = "회원 가입하기" onPress = {Register}></Button>
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
  