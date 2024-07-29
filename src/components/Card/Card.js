import React from 'react';
import { SafeAreaView, Text, View, Alert, Image, TouchableOpacity} from 'react-native';
import styles from './Card.style';

const Card = ({ product}) => {

    return (
        <View style={styles.cardContainer}>
            <Image 
            style={styles.cardImage}
            source={{uri: product.imgURL}}
            />
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={styles.cardPrice}>{product.price}</Text>
            <Text style={styles.cardStock}>{product.inStock ? '' : 'STOKTA YOK'} </Text>
        </View>
    );
};

export default Card;
