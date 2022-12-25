import { View,Text,StyleSheet,Button, Alert,TextInput,SafeAreaView,Image,ScrollView,TouchableOpacity,Dimensions,Linking } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { Banner,Footer } from "../ScreenModule/MenuModule";


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
    <Banner navigation = {navigation} />
    <View style = {{flex : 9, alignItems : "center", }}>
      <Text style = {styles.maintitle}>회원정보를 입력해주세요</Text>
      <TextInput
      placeholder="사용자 아이디를 입력해주세요"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="사용자 비밀번호를 입력해주세요"
      />
      <Button title = "로그인하기" onPress = {Login}></Button>
    </View>
    <View style = {styles.popup}>
    <ScrollView horizontal = {true}>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.kbstar.com/')}}><View style = {styles.advertise}><Image source={require('../assets/kb.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.shinhan.com/')}}><View style = {styles.advertise}><Image source={require('../assets/sh.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.wooribank.com/')}}><View style = {styles.advertise}><Image source={require('../assets/wr.jpg')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://daangn.onelink.me/Zw03/8npnhrzq')}}><View style = {styles.advertise}><Image source={require('../assets/carrot.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    </ScrollView>
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
        height: 50,
        width : '90%',
        borderRadius : 10,
        marginVertical : 10,
        borderWidth: 1,
        padding: 10,
      },
      advertise :
      {
        width : Dimensions.get('window').width, height : '100%', borderWidth : 1,
        alignItems : "center", justifyContent : "center",
      },
      popup :
      {
        flex : 12,
        borderWidth : 1,
      },
      

  });
  