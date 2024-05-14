// Necessário importação para usar os componentes
import { Text, View, Image, StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    // <View>: funciona como div no react-native
    <View style={tyler.container}>
      <Text style={tyler.texto}>Omae Wa Mou Shindeiru</Text>
      <Image style={tyler.imagem} source={require('./assets/omae.png')}/>
    </View>
  );
}
// Para iniciar o app: npx expo start

const tyler = StyleSheet.create({
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
    height: 200,
    marginTop: 20, 
  }
})