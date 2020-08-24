import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './estilo.js';
import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

export default function RedefinePass(){
    return(
        <View style={styles.Container}>
            <Image source={logo}/>
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Digite o seu email"
                    style={styles.input}
                />
            </View>
            <Button style="outline" onPress={false}>
                <Text style={styles.text_primary}>Recuperar a senha</Text>
            </Button>
        </View>
    )
}