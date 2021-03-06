import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
	},
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    text_white: {
        color: "#FFFFFF",
    },
    text_primary: {
        color: "#3483FA",
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        marginTop: 20,
    },
    containerInput: {
        width: "100%",
        marginBottom: 20,
    },
    redefinePass: {
        marginTop: 20,
    },
    buttonBack: {
        position: "absolute",
        top: 60,
        left: 20,
        color: "#3483FA",
    },
});

export default styles;