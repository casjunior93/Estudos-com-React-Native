import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './estilo.js';
import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

import firebase from '../../services/firebase';

export default function Signup(){

    const [user, setUser ] = useState();
    const [pass, setPass ] = useState();

    function handleSignup() {
        if(user,pass) {
            firebase.auth().createUserWithEmailAndPassword(user, pass)
            .then((response) => {
                Alert.alert('Ok', `O usuário ${user} foi registrado com sucesso!`);
            })
            .catch((error) => {
                Alert.alert('Ops', 'Erro: ' + error);
            });
            
        } else {
            Alert.alert('Erro', 'Preencha email e senha')
        }
    }

    return(
        <View style={styles.Container}>
            <Image source={logo}/>
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={(text) => {
                        setUser(text)
                     }}
                    style={styles.input}
                />
                <TextInput
                    name="user"
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => { setPass(text) }}
                    placeholder="Senha"
                    style={styles.input}
                />
            </View>
            <Button style="outline" onPress={handleSignup}>
                <Text style={styles.text_primary}>Criar conta</Text>
            </Button>
        </View>
    )
}