import {StyleSheet, Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    cardContainer:{
        backgroundColor: 'grey',
        margin: 5,
        alignItems: 'center',
        borderRadius:10,
        width: (width/2) -10,
        //elevation: 5,
    },
    cardImage:{
        width: (width/2) -20,
        height: height/4,
        borderRadius: 15,
        padding: 5,
        margin: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    cardTitle:{
        fontSize: 20,
        color:'black',
        fontWeight: 'bold',
    },
    cardPrice: {
        fontSize: 15, 
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white',   
        width: '100%',
        paddingLeft: 10,
    },
    cardStock:{
        fontSize:15,
        textAlign: 'left',
        width: '100%',
    },

});
