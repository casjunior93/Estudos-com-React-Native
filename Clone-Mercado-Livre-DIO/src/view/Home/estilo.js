import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text_white: {
        color: '#fff',
    }, 
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 150,
        marginBottom: 50,
        marginTop: 0,
      },
});

export default styles;