import { View,Text,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import Axios from 'axios';



export default function InformationScreen({navigation,route}:any) {

  const [lists,setLists] = useState([]);    
  // @인성 stores는 mysql에서 가져온 데이터를 저장할 변수 
  const [render,setRender] = useState(15);   
	//@인성 얼마나 많은 데이터를 랜더링 할것인가, 
  //추후 보완예정 (결과값이 없거나, 15개 이하일때의 경우 등 고려)
  const getLists = () => {
    //@인성 ngrok을 통해 서버에 접속, 이때 검색할 title을 서버에 전달 
    Axios.get(`https://cb9d-59-11-254-184.jp.ngrok.io/benefit?name=${route.params.title}`)
      .then(res => {
        //@인성 데이터베이스로부터 결과 res를 받아오면 그 데이터를 stores 변수에 저장
        setLists(res.data);
      })
      .catch(error => console.log(error));
  };
  
  useEffect(getLists,[])

  //@인성 가맹점에 대한 정보와 가장 혜택이 좋은 것이 무엇인지를 알려주는 페이지 
  return (
    <View style = {styles.container}>
      <Text>찾은 가맹점은 {route.params.value["가맹점명"]} 입니다</Text>
      <Text>업종은  {route.params.value["업종명"]} 입니다</Text>
      <Text>전화번호는 {route.params.value["전화번호"]} 입니다</Text>
      <Text>데이터 기준일자는 {route.params.value["데이터기준일자"]} 입니다</Text>
      {
        lists.slice(0,3).map((benefit,index) => {
          return (
            <View>
          <Text key = {index}>혜택이 가능한 수단은 {benefit["수단명"]}</Text>
          <Text>적용가능한 브랜드는 {benefit["적용브랜드"]}</Text>
          <Text>혜택은{benefit["소개"]}</Text>
          </View>
          )
        })
      }
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
  