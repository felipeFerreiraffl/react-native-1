// Necessário importação para usar os componentes
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 50,
          fontWeight: 900,
        }}
      >
        Flamengo
      </Text>
      <Image 
        style={{
          width: 150,
          height: 150,
          marginTop: 20,
        }}
        source={require('./assets/flamengo.png')}
      />
    </View>
  );
}
// Para iniciar o app: npx expo start