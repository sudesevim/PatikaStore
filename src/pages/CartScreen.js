import React from "react";
import { SafeAreaView, Text } from 'react-native';
import styles from './CartScreen.style';
import patiStore from '../../patistore.json';

function CartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bannerText}>Cart</Text>
        </SafeAreaView>
    );
}

export default CartScreen;
