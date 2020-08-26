import React, { useState } from 'react';
import { Text, View, ImageBackground, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native';

import image from '../../assets/bg.png';
import * as Font from 'expo-font';
import styles from './styleHome';

export default function App() {

  const [opacity, setOpacity] = useState(new Animated.Value(0));  

  Animated.timing(
    opacity,
    {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }
  ).start();

  const [loaded] = Font.useFonts({
    Grossa: require('../../assets/fontes/Mont-HeavyDEMO.otf'),
    Fina: require('../../assets/fontes/Leaner-Thin.ttf'),
    Botao: require('../../assets/fontes/Louis_George_Cafe.ttf')
  });

  return (
    <ImageBackground source={image} style={styles.image}>
      <Animated.View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop: 50,
      }}>
          <Animated.View style={styles.CarlosBank}>
            <Text style={styles.Carlos}>
              C93
            </Text>
            <Text style={styles.Bank}>
              Bank
            </Text>
          </Animated.View>
      </Animated.View>
      <Animated.View style={{
        opacity: opacity,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
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
      </Animated.View>
    </ImageBackground>
  );
}