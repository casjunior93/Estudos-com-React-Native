import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import background1 from "../../assets/bg-black.png";
import background2 from "../../assets/bg.png";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import styles from "./styleHome";

var height = Dimensions.get("window").height;

const fetchFonts = () => {
  return Font.loadAsync({
    "mont-heavy": require("../../assets/fontes/Mont-HeavyDEMO.otf"),
    "leaner-thin": require("../../assets/fontes/Leaner-Thin.ttf"),
    "louis-cafe": require("../../assets/fontes/Louis_George_Cafe.ttf"),
  });
};

const initialState = {
  marginTopLogo: new Animated.Value(height / 2 - 20),
  opacity: new Animated.Value(0),
};

export default function App() {
  var state = { ...initialState };

  const [background, setBackground] = useState(background1);
  const [dataLoaded, setDataLoaded] = useState(false);

  setTimeout(() => {
    Animated.timing(state.marginTopLogo, {
      toValue: 50,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, 4000);
  setTimeout(() => {
    setBackground(background2);
  }, 5000);
  setTimeout(() => {
    Animated.timing(state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, 6000);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <ImageBackground source={background} style={styles.image}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateY: state.marginTopLogo }],
          }}
        >
          <Text style={styles.Carlos}>C93</Text>
          <Text style={styles.Bank}>Bank</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          opacity: state.opacity,
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback>
          <Text style={styles.botaoAbrirConta}>ABRIR CONTA</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Text style={styles.botaoJaTenhoConta}>JÁ TENHO CONTA</Text>
        </TouchableWithoutFeedback>
      </Animated.View>
    </ImageBackground>
  );
}
