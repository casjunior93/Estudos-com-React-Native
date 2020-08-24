import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './style';

export default function Main() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text>Página Principal</Text>
            </View>
        </ScrollView>
    );
}