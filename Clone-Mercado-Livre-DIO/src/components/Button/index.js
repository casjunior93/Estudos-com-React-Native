import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';

export default function Button(props){
    return (
        <TouchableOpacity 
            onPress={
                props.onPress
            }
            style={props.style=='outline'?style.btn_outline_primary:style.btn_primary}>
            {/* reflete o que esta dentro das tags na chamada em index.js da home */}
            {props.children}
        </TouchableOpacity>
    );
}