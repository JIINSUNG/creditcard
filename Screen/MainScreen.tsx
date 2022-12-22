import { SafeAreaView,View,Text,StyleSheet,Image, Button} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

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
    //@메인페이지, 사용자가 원하는 가맹점을 검색하면 해당하는 가맹점에 대한 정보페이지로 이동
    <SafeAreaView style = {styles.container}>
    <View style = {styles.header}>
    <View style = {{flexDirection : "row", alignItems : "center"}}>
    <Image source={require('../assets/splash.png')} style = {{width :40, height : 40}}></Image>
    <Text>극한의 이득춘</Text>
    </View>
    <Text>메뉴</Text>
    </View>
    <View style = {styles.main}>
        <Text>이 페이지는 메인 화면입니다</Text>
        <Text>혜택을 알고 싶은 가맹점을 검색해보세요</Text>
        <Text>현재 용인지역화폐 가맹점 및 일부 프랜차이즈만 지원 중입니다</Text>
        <View style = {{flexDirection : "row"}}>
        <TextInput style = {{width : 200, height : 40, borderWidth:1, marginHorizontal : 10,}} onChangeText={setName} value={name}></TextInput>
        <Button title="검색" onPress={()=> {navigation.navigate('Store',{title : name})}}></Button>
        </View>
        </View>
    <View style = {styles.footer}>
        <Text>홈</Text>
        <Text>카드 관리</Text>
        <Text>카드 추천</Text>
        <Text>커뮤니티</Text>
        <Text>설정</Text>
    </View>
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
        flex : 5,
        alignItems : "center"
    },
    footer :
    {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginHorizontal : 10,
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
  