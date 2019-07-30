import React, {Component} from 'react';
import { View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Body, Content, List, ListItem, Text, Separator, Thumbnail } from "native-base";
import { NavigationActions } from 'react-navigation'
import { colors } from '../../styles';

const BUTTONS = [
    "Termos de Uso",
    "Como Funciona",
    "Politica de Privacidade",
    "Cancelar"
];
const CANCEL_INDEX = 3;


export default class Profile extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name="md-person" size={22} color={tintColor}/>
    };

    signOut = () => {
        try {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Welcome'}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } catch (err) {
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <View
                        style={{
                        height: 200,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.secundary
                        }}
                    >

                    <Thumbnail style={{ width: 160, height: 160, alignSelf: "center"}}
                        source={require("../../imgs/radarlivre.png")} />
                    </View>
                    <List>
                        <Separator bordered>
                            <Text>Dados do usuário</Text>
                        </Separator>
                        <ListItem icon>
                            <Body>
                                <Text>Nome Completo</Text>
                                <Text note>Fulano de Tal</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text>Email</Text>
                                <Text note>fulano@gmail.com</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text>Telefone</Text>
                                <Text note>(88) 9 9999-9999</Text>
                            </Body>
                        </ListItem>
                        <Separator bordered>
                            <Text>Geral</Text>
                        </Separator>
                        <ListItem onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Text>Alterar Senha</Text>
                        </ListItem>
                        <ListItem onPress={() => Alert.alert("Atenção!", "Em construção.")}>
                            <Text>Notificação</Text>
                        </ListItem>
                        <ListItem
                        onPress={() => Alert.alert("Atenção!", "Em construção.")}
                        >
                            <Text>Sobre o Radar Livre</Text>
                        </ListItem>
                        <ListItem onPress={() => this.signOut()}>
                            <Text>Sair</Text>
                        </ListItem>
                        <Separator bordered
                            style={{ alignItems: "center", justifyContent: "center" }}
                        >
                            <Text>
                                Radar Livre 2018
                            </Text>
                        </Separator>
                    </List>
                </Content>
            </Container>
        )
    }
}
