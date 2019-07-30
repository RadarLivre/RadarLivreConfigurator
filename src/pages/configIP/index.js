import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles'

export default class  ConfigIP extends Component {
    state = {
        loading: false,
        ip: ' ',
    };

    static navigationOptions = {
        header: null,
    };

    configIP = () => {
        try {
            this.setState({loading: true});
        } catch (err) {
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Configurar IP</Text>
                <Text style={styles.text}>
                    Só é permitido alterar o IP se a rede estiver como modo estático.
                </Text>

                <View style={styles.form}>
                    <Text style={styles.textLabel}>Endereço de IP</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType={"numeric"}
                        autoCorrect={false}
                        placeholder="192.168.0.200"
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>Máscara</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType={"numeric"}
                        autoCorrect={false}
                        placeholder="255.255.255.0"
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>DNS</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType={"numeric"}
                        autoCorrect={false}
                        placeholder="10.0.0.1"
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <TouchableOpacity style={styles.button} onPress={()=> this.configIP()}>
                        {
                            this.state.loading
                            ?   <ActivityIndicator size="small" color="#FFF"/>
                            :   <Text style={styles.buttonText}>Alterar</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
