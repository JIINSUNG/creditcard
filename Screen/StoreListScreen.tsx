import { View,Text,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import Axios from 'axios';




export default function StorelistScreen({navigation,route}:any) {
  //@인성 검색명과 유사한 가게 리스트를 보여주는 페이지
  //@인성 서버를 통해 데이터베이스에서 가게정보를 가져오는 코드 구현 예정
  const [stores,setStores] = useState([]);    //@인성 가져온 데이터를 저장할 변수 
  const [render,setRender] = useState(15);   //@인성 얼마나 많은 쿼리를 반환할것인지, 추후 보완예정 (결과값이 없거나, 15개 이하일때의 경우 등)
  const getStores = () => {
    //@인성 서버에 접속하면 title을 매개변수로 url에 접속, 해당 url접속시 title명과 일치하는 튜플들을 리턴
    Axios.get(`https://7d13-59-11-254-184.jp.ngrok.io/get?name=${route.params.title}`)
      .then(res => {
        //@인성 데이터베이스로부터 결과 res를 받아오면 그 데이터를 stores 변수에 저장
        setStores(res.data);
      })
      .catch(error => console.log(error));
  };
  
  useEffect(getStores,[])
  return (
    <View style = {styles.container}>
      <Text>안녕하세요</Text>
      <View>
      {
        stores.slice(render-15,render).map((store,index) => {
          return (<Text key = {index}>{store["가맹점명"]}</Text>
          )
        })
      }
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

  });
  