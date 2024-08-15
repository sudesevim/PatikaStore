import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, FlatList, TextInput, Dimensions } from 'react-native';
import Card from '../components/Card/Card';
import styles from '../styles/StoreScreen.style';
import patiStore from '../../patistore.json';

function StoreScreen({navigation}) {
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
                renderItem={({item}) => (
                <Card product={item}
                onPress={ () => navigation.navigate('ProductDetail', {product:item})} 
                />
            )}
                keyExtractor={(item) => item.id.toString()}   
                />  
        </SafeAreaView>
    );
}

export default StoreScreen;