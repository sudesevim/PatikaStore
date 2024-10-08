import {StyleSheet, Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    cardContainer:{
        backgroundColor: '#0f0e17',
        margin: 5,
        alignItems: 'center',
        borderRadius:10,
        padding: 10,
        width: (width/2) -10,
        alignItems: 'flex-start',
        shadowColor: '#black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        
    },
    cardImage:{
        width: (width/2) -30,
        height: height/4,
        borderRadius: 15,
        marginBottom: 5,
    },
    cardTitle:{
        fontSize: 20,
        color:'#fffffe',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
    },
    cardPrice: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#ff8906',   
        width: '100%',
    },
    cardStock:{
        fontSize:15,
        textAlign: 'left',
        width: '100%',
        textAlign: 'left',
        color: '#e53170',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 2,
        marginBottom: 2,
    },
});
