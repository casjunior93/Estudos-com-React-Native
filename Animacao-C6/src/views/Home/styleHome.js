import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  // CarlosBank: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: height / 2 - 20,
  // },
  Carlos: {
    fontSize: 56,
    color: "white",
    fontFamily: "mont-heavy",
  },
  Bank: {
    fontSize: 55,
    fontWeight: "100",
    color: "white",
    fontFamily: "leaner-thin",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  botaoAbrirConta: {
    fontSize: 14,
    color: "black",
    backgroundColor: "#ffdb58",
    padding: 15,
    borderRadius: 30,
    width: width - 30,
    textAlign: "center",
    fontFamily: "louis-cafe",
    fontWeight: "300",
  },
  botaoJaTenhoConta: {
    fontSize: 14,
    color: "white",
    padding: 15,
    borderRadius: 30,
    fontWeight: "300",
    borderWidth: 1,
    borderColor: "white",
    width: width - 30,
    textAlign: "center",
    margin: 17,
    marginBottom: 40,
    fontFamily: "louis-cafe",
    opacity: 0.7,
  },
});

export default styles;
