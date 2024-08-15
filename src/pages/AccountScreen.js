import React from "react";
import { SafeAreaView, Text } from 'react-native';
import styles from '../styles/AccountScreen.style';

import Button from '../components/Button';

function AccountScreen({navigation}) {
    function goToMemberSign() {
        navigation.navigate('MemberSign');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Tatil Store</Text>
            <Button text="Sign In" onPress={goToMemberSign} /> 
        </SafeAreaView>
    );
}

export default AccountScreen;
