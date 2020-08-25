import {StyleSheet, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

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

  export default styles;