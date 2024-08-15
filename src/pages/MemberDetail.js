import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from '../styles/MemberDetail.style';

function MemberDetail({route}) {
    const {user} = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}> Registration completed! </Text>
            <Text style={styles.label}> Username:  <Text style={styles.innerText}>{user.username} </Text> </Text>
            <Text style={styles.label}> Surname: {user.userSurname} </Text>
            <Text style={styles.label}> Age: {user.userAge}</Text>
            <Text style={styles.label}> Email adress: {user.userEmail} </Text>
        </SafeAreaView>
    );
}

export default MemberDetail;