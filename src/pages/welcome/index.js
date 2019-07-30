import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Right, Button, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation'
import propTypes from 'prop-types';

import styles from './styles'

export default class  Welcome extends Component {
    state = {
        loading: false,
    };

    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: propTypes.shape({
            dispatch: propTypes.func,
        }).isRequired
    };

    signIn = () => {
        try {
            this.setState({loading: true});
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'User'}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } catch (err) {
            this.setState({loading: false});
        }
    }

    lostPassword = () => {
        this.props.navigation.navigate('LostPassword')
    }

    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('FindServer')}>
                            <Icon name={"cogs"} size={28} color={"#FFFFFF"}/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <Text style={styles.title}>Bem vindo</Text>
                    <Text style={styles.text}>
                        Para continuar, precisamos que você informe seu usuário e senha do radar livre.
                    </Text>

                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Digite seu usuário"
                            underlineColorAndroid="rgba(0,0,0,0)"
                        />

                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            placeholder="Digite sua senha"
                            underlineColorAndroid="rgba(0,0,0,0)"
                        />

                        <TouchableOpacity style={styles.button} onPress={()=> this.signIn()}>
                            {
                                this.state.loading
                                ?   <ActivityIndicator size="small" color="#FFF"/>
                                :   <Text style={styles.buttonText}>Prosseguir</Text>
                            }
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={styles.textLostPassword}
                        onPress={()=> this.lostPassword()}
                    >
                        esqueceu a senha?
                    </Text>
                </View>
            </Container>
        )
    }
}
