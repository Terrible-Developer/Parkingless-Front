import { Image } from 'expo-image';
import { Platform, StyleSheet, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL_TEST;

const buttonTest = () => {
  console.log('test');
}
const getAllUsers = async () => {
  console.log('URL DEBUG ', apiUrl);
  /*try {
    const response = await axios.get(apiUrl!);
    console.log(response);
  } catch (err) {
    console.log('Erro: ', err);
  }*/
  const response = axios.get(apiUrl!)
  .then(response =>{
    console.log('Resposta: ', response);
  })
  .catch(err => {
    console.log('Erro: ', err);
  });

}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao Parkingless</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Botão de teste</ThemedText>
        <Button title="Teste" accessibilityLabel="Botão de teste" onPress={buttonTest}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Imprimir lista de usuários</ThemedText>
        <Button title="Pressione aqui" accessibilityLabel="Botão lista de usuários" onPress={getAllUsers}/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
