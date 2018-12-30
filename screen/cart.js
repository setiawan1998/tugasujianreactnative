import React, { Component } from 'react'
import {Platform, StyleSheet, ScrollView, View, Image} from 'react-native';
import { Container, Text, Button, Footer, FooterTab, Content, Header, Card, CardItem, Body, Right, Left, Thumbnail, Title } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { ALL_ORDERS } from './actions/cartactions'
import { connect } from 'react-redux';
import axios from 'axios'

class cartScreen extends Component{

    componentDidMount(){
        this.props.dispatch(ALL_ORDERS())
    }
    remove(id){
        axios.delete('http://192.168.43.58:3333/api/v1/order/'+id).then((response) => {
            this.props.dispatch(ALL_ORDERS())
        }) 
    }
    static navigationOption = {
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: '#3498db'}}>
                    <Left>
                        <Button transparent  onPress={()=> this.props.navigation.navigate("Product")}>
                            <Icon name="md-arrow-back" size={30} color="#fff"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Cart</Title>
                    </Body>
                    <Right style={{textAlign: 'right'}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("Product")}>
                            <Icon name="md-done-all" size={30} color="#fff" style={{width: 50, justifyContent: 'center', textAlign: 'center'}}/>
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    {this.props.carts.result.map((cart, i) => (
                        <Card key={i}>
                            <CardItem>
                                <Left>
                                    <Thumbnail square large source={{uri: cart.product.image_url}} />
                                </Left>
                                <Body style={{justifyContent: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15, color: '#333'}}>{cart.product.name}</Text>
                                    <Text style={{fontSize: 12, color: '#999'}}>Rp.{cart.price}</Text>
                                    <Text style={{fontSize: 12, color: '#999'}}>qty: {cart.qty}</Text>
                                </Body>
                                <Right style={{textAlign: 'right'}}>
                                    <Button onPress={() => this.remove(cart.id) } style={{width: 50, height: 40, justifyContent: 'center', textAlign: 'center', backgroundColor: '#f00'}}><Icon name="ios-trash" size={30} style={{color: '#fff'}}/></Button>
                                </Right>
                            </CardItem>
                        </Card>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    carts: state.cartReducers
})
  
export default connect(mapStateToProps)(cartScreen)
// export default ProductScreen