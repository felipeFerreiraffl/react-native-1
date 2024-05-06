// Necessário importação para usar os componentes
import { Text, View, Image } from 'react-native';
import { tyler } from "./style-externo";

export default function App() {
  return (
    // <View>: funciona como div no react-native
    <View style={tyler.container}>
      <Text style={tyler.texto}>Omae Wa Mou Shindeiru</Text>
      <Image style={tyler.imagem} source={require('./assets/omae-wa.png')}/>
    </View>
  );
}
// Para iniciar o app: npx expo start