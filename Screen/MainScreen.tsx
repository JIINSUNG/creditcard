import { SafeAreaView,View,Text,StyleSheet,Image, Button,ScrollView, TouchableOpacity, Linking } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {  TextInput } from "react-native-gesture-handler";
import {Dimensions} from 'react-native';
import { Banner,Footer } from "../ScreenModule/MenuModule";


/*const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

    useEffect(()=> {fetchData("https://randomuser.me/api/?results=20");},[]);
*/

 /* const fetchData = async(url:string) => 
  {
    try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        setFilteredData(json.results);
        console.log(filteredData);

    } catch(error)
    {
        console.error(error)
    }

  }*/  


export default function MainScreen({navigation}:any) {
  const [name,setName] = useState("")
  return (
    //@인성 사용자가 원하는 가맹점을 검색하면 데이터베이스에서 검색후 리스트를 띄워줌
    <SafeAreaView style = {styles.container}>
      <Banner />
    <View style = {styles.main}>
        <Text>혜택을 알고 싶은 가맹점을 검색해보세요</Text>
        <Text>현재 용인지역화폐 가맹점 및 일부 프랜차이즈만 지원 중입니다</Text>
        <View style = {{flexDirection : "row", marginVertical : 25}}>
        <TextInput style = {{width : 200, height : 40, borderWidth:1, marginHorizontal : 10, justifyContent : "center",alignItems : "center"}} placeholder="가맹점 또는 카드명을 입력해주세요" onChangeText={setName} value={name}></TextInput>
        <Button title="검색" onPress={()=> {navigation.navigate('Store',{title : name})}}></Button>
        </View>
        </View>
      {/* @인성 카드광고, 설계사 홍보 등을 노출할 팝업창, 가로 슬라이드 애니메이션 적용예정, 누를시 해당 광고,홍보사이트 또는 상세페이지로 리다이렉션 */}
      <View style = {styles.popup}>
    <ScrollView horizontal = {true}>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.kbstar.com/')}}><View style = {styles.advertise}><Image source={require('../assets/kb.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.shinhan.com/')}}><View style = {styles.advertise}><Image source={require('../assets/sh.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://www.wooribank.com/')}}><View style = {styles.advertise}><Image source={require('../assets/wr.jpg')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    <TouchableOpacity onPress = {() => {Linking.openURL('https://daangn.onelink.me/Zw03/8npnhrzq')}}><View style = {styles.advertise}><Image source={require('../assets/carrot.png')} style = {{width :'100%', height : '100%', borderRadius : 20}}/></View></TouchableOpacity>
    </ScrollView>
      </View>
      {/* */}

      {/* @인성 하단 메뉴바 구성, 누르면 각 페이지로 이동 */}
    <Footer navigation = {navigation}/>
    </SafeAreaView>
  )

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header :{
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginHorizontal : 20,
    },
    main :
    {
        flex : 2,
        alignItems : "center"
    },
    advertise :
    {
      width : Dimensions.get('window').width, height : '100%', borderWidth : 1,
      alignItems : "center", justifyContent : "center",
    },
    popup :
    {
      flex : 7,
      borderWidth : 1,
    },

    scrollsText :
    {
        fontSize : 10,
        textAlign: 'left',
        marginleft : 10,
        fontweight : 'bold',
        marginTop: 10,
    },

  });
  