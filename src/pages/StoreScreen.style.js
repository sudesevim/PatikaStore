import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bannerText: {
        fontSize: 30,
    },
    textInput: {
        fontSize: 20,
    },
});