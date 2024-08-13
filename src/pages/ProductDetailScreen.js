import React from "react";
import { SafeAreaView, SafeAreaViewBase, Text, View } from "react-native";
import Card from '../components/Card/Card';
import styles from './ProductDetailScreen.style';
import patiStore from '../../patistore.json';

function ProductDetailScreen({route}) {
    const {product} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bannerText}>{product.title}</Text>
        </SafeAreaView>
    );
}

export default ProductDetailScreen;