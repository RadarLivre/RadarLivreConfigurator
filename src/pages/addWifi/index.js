import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles'

export default class AddWifi extends Component {
    state = {
        loading: false,
    };

    static navigationOptions = {
        header: null,
    };

    add = () => {
        try {
            this.setState({loading: true});
        } catch (err) {
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Adicionar Rede Wi-fi</Text>
                <Text style={styles.text}>
                    Para continuar, preencha os campos abaixo.
                </Text>

                <View style={styles.form}>
                    <Text style={styles.textLabel}>SSID</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Informe o SSID"
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>Senha</Text>

                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Informe a senha"
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>Observação</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Observação..."
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <TouchableOpacity style={styles.button} onPress={()=> this.add()}>
                        {
                            this.state.loading
                            ?   <ActivityIndicator size="small" color="#FFF"/>
                            :   <Text style={styles.buttonText}>Cadastrar</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
