import { SafeAreaView,View,Text,StyleSheet,Image, Button,ScrollView, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Banner = ({navigation} : any) => {
    return (<View style = {styles.banner}>
        <View>
        <Image source={require('../assets/logo.jpg')} style = {{width :60, height : 60}}></Image>
        <Text style = {styles.bannertitle}>극한의 이득춘</Text>
        </View>
        <View><Text onPress={()=> {navigation.navigate('Menu')}} style = {styles.bannertitle}>메뉴</Text></View>
          
        </View>
    )
}

const Footer = ({navigation}:any) => 
{
    return (<View style = {styles.footer}>
        <Text onPress={()=> {navigation.navigate('Home')}}>홈</Text>
        <Text onPress={()=> {navigation.navigate('CardManage')}}>카드 관리</Text>
        <Text onPress={()=> {navigation.navigate('Recommend')}}>카드 추천</Text>
        <Text onPress={()=> {navigation.navigate('Community')}}>커뮤니티</Text>
        <Text onPress={()=> {navigation.navigate('Setting')}}>설정</Text>
        </View>)
}

export {Banner, Footer}

const styles = StyleSheet.create({
    footer :
    {
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

})