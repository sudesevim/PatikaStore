import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View, FlatList, TextInput, Dimensions} from 'react-native';
import patiStore from './patistore.json';
import Card from './src/components/Card/Card';

function App() {
    const keyExtractor = (item: any) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <Text style = {styles.bannerText}>PATIKASTORE</Text>
            <TextInput 
            onChangeText={(value) => console.log(value, 'yazıldı')}
            style={styles.textInput}
            placeholder="Search" 
            />
            <FlatList
                numColumns={2}
                data={patiStore}
                renderItem={({item}) => <Card product={item}/>}
                keyExtractor={keyExtractor} 
                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    bannerText: {
        fontSize: 30,
        color: 'purple',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
    },
    textInput: {
        fontSize: 18,
        width: Dimensions.get('window').width -25,
        height: Dimensions.get('window').height /15,
        margin: 8,
        borderWidth: 1,
        marginBottom: 14,
        marginTop: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'grey',
    },
});

export default App;
