import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './estilo.js';
import logo from '../../assets/logoml.png';
import Button from '../../components/Button';
import image from '../../assets/compras.jpg';

export default function Home({navigation}){
    return(
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.Container}>
            
                <Image source={logo} style={styles.logo}/>
                <Button style="outline" onPress={()=>navigation.navigate('Login')}>
                    <Text>Entrar</Text>
                </Button>
                <Button onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.text_white}>Criar conta</Text>
                </Button>
            </View>
        </ImageBackground>
    )
}