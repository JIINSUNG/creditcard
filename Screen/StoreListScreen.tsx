import { View,Text,StyleSheet} from "react-native";
import { useState } from "react";
import Axios from 'axios';




export default function StorelistScreen({navigation,route}:any) {
  //@인성 검색명과 유사한 가게 리스트를 보여주는 페이지
  //@인성 서버를 통해 데이터베이스에서 가게정보를 가져오는 코드 구현 예정
  // const [stores,setStores] = useState([]);
  // const getStores = () => {
  //   Axios.get('http://127.0.0.1:3000/stores')
  //     .then(res => {
  //       setStores(res.data);
  //     })
  //     .catch(error => console.log(error));
  // };
  
  return (
    <View style = {styles.container}>
      <Text>입력하신 값은 {route.params.title} 입니다</Text>
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
  