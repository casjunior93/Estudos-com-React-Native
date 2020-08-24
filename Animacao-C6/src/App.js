import React from 'react';
import { Text, View, StyleSheet, ImageBackground,  TouchableWithoutFeedback, Dimensions } from 'react-native';

import image from './assets/bg.png';
import * as Font from 'expo-font';

var width = Dimensions.get('window').width;

export default function App() {

  const [loaded] = Font.useFonts({
    Grossa: require('./assets/fontes/Mont-HeavyDEMO.otf'),
    Fina: require('./assets/fontes/Leaner-Thin.ttf'),
    Botao: require('./assets/fontes/Louis George Cafe.ttf')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: 50,
  },
  CarlosBank: {
    flexDirection: "row",
    alignItems: 'center'
  },
  Carlos: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'Grossa'
  },
  Bank: {
    fontSize: 60,
    fontWeight: "100",
    color: 'white',
    fontFamily: 'Fina'
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  botaoAbrirConta: {
    fontSize: 15,
    color: 'black',
    backgroundColor: "#ffdb58",
    padding: 15,
    borderRadius: 30,
    width: width-30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Botao',
    fontWeight: "300",
  },
  botaoJaTenhoConta: {
    fontSize: 15,
    color: 'white',
    padding: 15,
    borderRadius: 30,
    fontWeight: "300",
    borderWidth: 1,
    borderColor: 'white',
    width: width-30,
    textAlign: 'center',
    margin: 10,
    marginBottom: 40,
    fontFamily: 'Botao',
  }
})