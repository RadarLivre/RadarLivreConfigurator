import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Container, Header, Body, Title, Content, List, ListItem, Fab, Text, Left, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../styles';
import styles from './styles'
export default class ListWifi extends Component {
    static navigationOptions = {
        header: null,
    };

  render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Rede Wi-fi</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem avatar style={styles}
                            onLongPress={()=>
                                Alert.alert(
                                'Atenção',
                                'Qual Operação deseja realizar?',
                                [
                                  {text: 'Editar', onPress: () => null},
                                  {text: 'Excluir', onPress: () => null},
                                  {text: 'Cancelar', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )}
                        >
                            <Left>
                                <Icon name="md-wifi" size={30} color={colors.primary}/>
                            </Left>
                            <Body>
                                <Text>brisa-508437</Text>
                                <Text note>Obs: Roteador do meu quarto</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar
                            onLongPress={()=>
                                Alert.alert(
                                'Atenção',
                                'Qual Operação deseja realizar?',
                                [
                                    {text: 'Editar', onPress: () => this.props.navigation.navigate('AddWifi')},
                                    {text: 'Excluir', onPress: () => null},
                                    {text: 'Cancelar', onPress: () => null, style: 'cancel'},
                                ],
                                { cancelable: false }
                            )}
                        >
                            <Left>
                                <Icon name="md-wifi" size={30} color={colors.primary}/>
                            </Left>
                            <Body>
                                <Text>brisa-289250</Text>
                                <Text note>Obs: Roteador do vizinho</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddWifi')}
                >
                    <Icon name="ios-wifi"/>
                </Fab>
            </Container>
    );
  }
}
