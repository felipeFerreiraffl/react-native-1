import { StyleSheet } from "react-native";

export const tyler = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    texto: {
      color: 'black',
      fontSize: 50,
      fontWeight: '900',
    },
    imagem: {
      width: 200,
      height: 200,
      marginTop: 20, 
    }
})