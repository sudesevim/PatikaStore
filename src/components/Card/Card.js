import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Card.style';

const Card = ({ product, onPress }) => {

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(product)}>
            <Image 
                style={styles.cardImage}
                source={{ uri: product.imgURL }}
            />
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={styles.cardPrice}>{product.price}</Text>
            <Text style={styles.cardStock}>{product.inStock ? '' : 'STOKTA YOK'}</Text>
        </TouchableOpacity>
    );
};

export default Card;

