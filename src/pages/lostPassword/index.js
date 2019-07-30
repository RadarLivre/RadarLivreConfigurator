import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

const LostPassword = () => (

    <View style={styles.container}>

        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.text}>
            Para continuar, precisamos que você informe seu email cadastrado no radar livre.
        </Text>

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu email"
                underlineColorAndroid="rgba(0,0,0,0)"
            />

            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.buttonText}>Recuperar Senha</Text>
            </TouchableOpacity>
        </View>
    </View>
)

LostPassword.navigationOptions = {
    header: null,
}

export default LostPassword;
