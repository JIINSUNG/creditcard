import { StyleSheet, View,Text } from "react-native"
import { StatusBar } from 'expo-status-bar';


export default function App() {

    return (
        <View style={styles.container}>
        <Text>극한의 이득춘</Text>
        <StatusBar style="auto" />
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