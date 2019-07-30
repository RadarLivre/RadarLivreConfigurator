import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List, ListItem, Right, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../styles';
export default class Log extends Component {

    static navigationOptions = {
        header: null,
    };

  render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Registro de eventos</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-funnel" size={22} color={"#FFF"}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem iconRight>
                            <Body>
                                <Text>Falha ao conectar com o servidor principal.</Text>
                                <Text note>15/11/2018 - 23:50:00</Text>
                            </Body>
                            <Right>
                                <Icon name="md-alert" size={30} color={colors.danger}/>
                            </Right>
                        </ListItem>
                        <ListItem iconRight>
                            <Body>
                                <Text>Falha ao realizar o backup.</Text>
                                <Text note>15/11/2018 - 23:50:00</Text>
                            </Body>
                            <Right>
                                <Icon name="md-alert" size={30} color={colors.danger}/>
                            </Right>
                        </ListItem>
                        <ListItem iconRight>
                            <Body>
                                <Text>Backup realizado com sucesso.</Text>
                                <Text note>15/11/2018 - 23:55:00</Text>
                            </Body>
                            <Right>
                                <Icon name="md-alert" size={30} color={colors.sucess}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
    );
  }
}
