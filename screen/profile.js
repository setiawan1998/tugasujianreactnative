import React, { Component } from 'react'
import {Platform, StyleSheet, ScrollView, View, Image} from 'react-native';
import { Container, Text, Button, Footer, FooterTab, Content, Header, Card, CardItem, Body, Right, Left, Thumbnail, Title } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons'


export default class HomeScreen extends Component{
    static navigationOption = {
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: '#3498db'}}>
                    <Left>
                        <Icon name="md-person" size={30} color="#fff"/>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Profile</Title>
                    </Body>
                    <Right style={{textAlign: 'right'}}>
                        {/* <Button transparent>
                            <Icon name="md-cart" size={30} color="#fff" style={{width: 50, height: 40, justifyContent: 'center', textAlign: 'center'}}/>
                        </Button> */}
                    </Right>
                </Header>
                <Text style={{paddingTop: 30,textAlign: 'center', fontSize: 13, color: '#555'}}>Halaman ini masih dalam proses pembuatan, maaf yang sebesar besarnya.</Text>
            </View>
        )
    }
}