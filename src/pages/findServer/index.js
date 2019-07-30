import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles'

export default class  FindServer extends Component {
    state = {
        loading: false,
        ip: ' ',
    };

    static navigationOptions = {
        header: null,
    };

    findIP = () => {
        try {
            this.setState({loading: true});
        } catch (err) {
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Identificar Equipamento</Text>
                <Text style={styles.text}>
                    Para continuar, precisamos que você informe o IP do equipamento de coleta.
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

                    <TouchableOpacity style={styles.button} onPress={()=> this.findIP()}>
                        {
                            this.state.loading
                            ?   <ActivityIndicator size="small" color="#FFF"/>
                            :   <Text style={styles.buttonText}>Localizar</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
