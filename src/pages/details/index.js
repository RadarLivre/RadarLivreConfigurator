import React, {Component} from 'react';
import { Alert } from 'react-native';
import styles from './styles'
import { Container, Header, Title, Content, List, ListItem, Separator, Text, Body, Right, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Details extends Component {
    state = {
        isActive: true,
    };

    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name="md-construct" size={22} color={tintColor}/>
    };

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Detalhes do Equipamento</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <Separator bordered>
                            <Text>Status do Equipamento</Text>
                        </Separator>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Serviço</Text>
                            </Body>
                            <Right>
                                {
                                    this.state.isActive
                                    ? <Icon active name="md-checkmark-circle" size={22} color={"#00FF00"}/>
                                    : <Icon active name="md-close-circle" size={22} color={"#FF0000"}/>
                                }
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Temperatura</Text>
                            </Body>
                            <Right>
                                <Text style={styles.text}>30 C</Text>
                            </Right>
                        </ListItem>
                        <Separator bordered>
                            <Text>Registro de Operação</Text>
                        </Separator>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Mensagem Coletada</Text>
                            </Body>
                            <Right>
                                <Text style={styles.text}>11/11/1111 - 00:00:00</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Mensagem Enviada</Text>
                            </Body>
                            <Right>
                                <Text style={styles.text}>11/11/1111 - 00:00:00</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Backup</Text>
                            </Body>
                            <Right>
                                <Text style={styles.text}>11/11/1111 - 00:00:00</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={()=> this.props.navigation.navigate('Log')}>
                            <Body>
                                <Text style={styles.text}>Visualizar Logs</Text>
                            </Body>
                            <Right>
                                <Icon active name="md-arrow-forward" size={22}/>
                            </Right>
                        </ListItem>
                        <Separator bordered>
                            <Text>Configuração de Rede</Text>
                        </Separator>
                        <ListItem icon>
                            <Body>
                                <Text style={styles.text}>Modo IP Estático</Text>
                            </Body>
                            <Right>
                                <Switch value={true} />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={ ()=> this.props.navigation.navigate('ConfigIP')}>
                            <Body>
                                <Text style={styles.text}>Configurar IP</Text>
                            </Body>
                            <Right>
                                <Icon active name="md-arrow-forward" size={22}/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => this.props.navigation.navigate('ListWifi')}>
                            <Body>
                                <Text style={styles.text}>Configurar Rede Wi-fi</Text>
                            </Body>
                            <Right>
                                <Icon active name="md-arrow-forward" size={22}/>
                            </Right>
                        </ListItem>
                        <Separator bordered>
                            <Text>Manutenção</Text>
                        </Separator>
                        <ListItem icon onPress={() => {
                            Alert.alert(
                                'Atenção!',
                                'Deseja reiniciar o serviço de coleta de mensagens?',
                                [
                                  {text: 'Sim', onPress: () => null},
                                  {text: 'Não', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )
                        }}>
                            <Body>
                                <Text style={styles.text}>Reiniciar Serviço</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => {
                            Alert.alert(
                                'Atenção!',
                                'Deseja reiniciar o equipamento de coleta?',
                                [
                                  {text: 'Sim', onPress: () => null},
                                  {text: 'Não', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )
                        }}>
                            <Body>
                                <Text style={styles.text}>Reiniciar Equipamento</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => {
                            Alert.alert(
                                'Atenção!',
                                'Deseja retornar para as configurações de fábrica?',
                                [
                                  {text: 'Sim', onPress: () => null},
                                  {text: 'Não', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )
                        }}>
                            <Body>
                                <Text style={styles.text}>Configuração de Fábrica</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => {
                            Alert.alert(
                                'Atenção!',
                                'Deseja realizar o backup das últimas mensagens?',
                                [
                                  {text: 'Sim', onPress: () => null},
                                  {text: 'Não', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )
                        }}>
                            <Body>
                                <Text style={styles.text}>Realizar Backup</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
