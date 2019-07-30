import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles'

export default class  ChangePassword extends Component {
    state = {
        loading: false,
    };

    static navigationOptions = {
        header: null,
    };

    changePassword = () => {
        try {
            this.setState({loading: true});
        } catch (err) {
        }
        this.setState({loading: false});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Alterar Senha</Text>
                <Text style={styles.text}>
                    Para continuar, precisamos que você informe sua senha antiga e repita a nova duas vezes.
                </Text>

                <View style={styles.form}>
                    <Text style={styles.textLabel}>Senha antiga</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Informe sua senha antiga."
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>Senha nova</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Informe sua senha nova."
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <Text style={styles.textLabel}>Repetir senha</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Repita sua senha nova."
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />

                    <TouchableOpacity style={styles.button} onPress={()=> this.changePassword()}>
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
