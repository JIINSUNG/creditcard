import { View,Text,StyleSheet, SafeAreaView} from "react-native";
import { useState } from "react";
import { Banner, Footer } from "../ScreenModule/MenuModule";



export default function CommunityScreen( {navigation} : any) {

  return (

    <SafeAreaView style = {styles.container}>
    <Banner navigation = {navigation}/>
    <View style = {styles.main}></View>
    <Footer navigation = {navigation}/>
    </SafeAreaView>
  )

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    main :
    {
      flex : 9
    }
  });
  