import { View,Text,StyleSheet,Image,ScrollView, RefreshControl} from "react-native";
import { useEffect, useState } from "react";
import Axios from 'axios';




export default function StorelistScreen({navigation,route}:any) {
  //@인성 검색명과 유사한 가게 리스트를 보여주는 페이지
  //@인성 서버를 통해 데이터베이스에서 가게정보를 가져오는 코드 구현 예정
  const [stores,setStores] = useState([]);    
  // @인성 stores는 mysql에서 가져온 데이터를 저장할 변수 
  const [render,setRender] = useState(15);   
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([])
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = () => {
    setRefreshing(true);
    setRender((number) => number+5)
    wait(2000).then(() => setRefreshing(false));
  };

	//@인성 얼마나 많은 데이터를 랜더링 할것인가, 
  //추후 보완예정 (결과값이 없거나, 15개 이하일때의 경우 등 고려)
  const getStores = () => {
    //@인성 ngrok을 통해 서버에 접속, 이때 검색할 title을 서버에 전달 
    Axios.get(`https://cb9d-59-11-254-184.jp.ngrok.io/get?name=${route.params.title}`)
      .then(res => {
        //@인성 데이터베이스로부터 결과 res를 받아오면 그 데이터를 stores 변수에 저장
        setStores(res.data);
      })
      .catch(error => console.log(error));
  };
  
 
  useEffect(getStores,[])
  return (
    <View style = {styles.container}>
<View style = {styles.banner}>
    <View><Image source={require('../assets/splash.png')} style = {{width :40, height : 40}}></Image>
    <Text style = {styles.bannertitle}>극한의 이득춘</Text></View>
    <View><Text style = {styles.bannertitle}>메뉴</Text></View>  
    </View>
    <View style = {styles.main}><Text style = {styles.listtitle}>검색 결과</Text>
    <Text>가맹점명을 누르면 상세 페이지로 이동합니다</Text>
    <Text>아래로 당기거나 아래로 드래그하시면 더 많은 가맹점 정보를 표시합니다</Text>
    </View>
    <View style={styles.mainlist}>
    <ScrollView  onTouchEnd = {onRefresh}>
    {/* refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } */}
      <Text>최대 {render} 만큼의 가게를 표시합니다</Text>
      {
      stores.slice(0,render).map((store,index) => {
      return (<View style = {styles.items} key = {index}><Text onPress={()=> {navigation.navigate('Information',{value : store})}}>{store["가맹점명"]}</Text></View>
      )
    })}
      </ScrollView>
      </View>
      <View style = {styles.footer}>
        <Text onPress={()=> {navigation.navigate('Home')}}>홈</Text>
        <Text onPress={()=> {navigation.navigate('CardManage')}}>카드 관리</Text>
        <Text onPress={()=> {navigation.navigate('Recommend')}}>카드 추천</Text>
        <Text onPress={()=> {navigation.navigate('Community')}}>커뮤니티</Text>
        <Text onPress={()=> {navigation.navigate('Setting')}}>설정</Text>
    </View>
    </View>
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
  main :
  {
    flex : 0.5,
    alignItems : "center",
  },
  listtitle :
  {
    fontSize : 20,
    fontWeight : "bold",
  },
  items :
  {
    alignItems : "center",
    justifyContent : "center",
    width : '95%',
    height : 50,
    borderWidth : 1,
    marginVertical : 10,
    marginHorizontal : 10,
    borderRadius : 10,
  },
  mainlist :
  {
      flex : 3,
      borderWidth : 1,
      borderRadius : 10,
      width : '100%',
      height : '100%',
  },
    footer :
    {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginHorizontal : 20,
    },
  });
  