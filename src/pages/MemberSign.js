import React, {useState} from "react";
import {SafeAreaView, Text, View, Alert} from 'react-native';
import Input from "../components/Input";
import Button from '../components/Button';


function MemberSign({navigation}) {
    const [username, setUsername] = useState(null);
    const [userSurname,setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setMail] = useState(null);

    function handleSubmit() {
        if(!username || !userSurname || !userAge || !userMail) {
            Alert.alert('Tatil Store', 'Bilgiler boş bırakılamaz.');
            return;
        }
        const user = {
            username,
            userSurname,
            userAge,
            userMail,
        };
        navigation.navigate('MemberDetail', {user});
    }
    return (
        <SafeAreaView>
            <Input
              label="Adınız:"
              placeholder="Adınızı giriniz..."
              onChangeText={setUsername}/>
            <Input 
              label="Soyadınız:" 
              placeholder="Soyadınızı giriniz..."
              onChangeText={setUserSurname}/>
            <Input 
              label="Yaşınız: "
              placeholder="Yaşınızı giriniz..."
              onChangeText={setUserAge}/>
            <Input 
              label="E-posta adresiniz:"
              placeholder="E-posta adresinizi giriniz..."
              onChangeText={setMail}/>
            <Button text = "Complete registration" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;