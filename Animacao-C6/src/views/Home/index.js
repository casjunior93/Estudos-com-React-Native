import React from 'react';
import { Text, View, ImageBackground,  TouchableWithoutFeedback, Alert } from 'react-native';

import image from '../../assets/bg.png';
import * as Font from 'expo-font';
import styles from './styleHome';

export default function App() { 

  const [loaded] = Font.useFonts({
    Grossa: require('../../assets/fontes/Mont-HeavyDEMO.otf'),
    Fina: require('../../assets/fontes/Leaner-Thin.ttf'),
    Botao: require('../../assets/fontes/Louis_George_Cafe.ttf')
  });

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
          <View style={styles.CarlosBank}>
            <Text style={styles.Carlos}>
              C93
            </Text>
            <Text style={styles.Bank}>
              Bank
            </Text>
          </View>
      </View>
      <View style={styles.container2}>
        < TouchableWithoutFeedback>
        <Text style={styles.botaoAbrirConta}>
            ABRIR CONTA
          </Text>
        </ TouchableWithoutFeedback>

        < TouchableWithoutFeedback>
        <Text style={styles.botaoJaTenhoConta}>
            JÁ TENHO CONTA
          </Text>
        </ TouchableWithoutFeedback>        
      </View>
    </ImageBackground>
  );
}