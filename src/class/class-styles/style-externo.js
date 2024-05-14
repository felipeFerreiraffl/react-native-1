import { StyleSheet, Platform } from "react-native";

export const tyler = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: Platform.OS === 'android' ? 'white' : 'grey',
    },
    texto: {
      color: Platform.OS === 'android' ? 'black' : 'darkblue',
      fontSize: 50,
      fontWeight: '900',
    },
    imagem: {
      width: 200,
      height: 300,
      marginTop: 20, 
    }
})