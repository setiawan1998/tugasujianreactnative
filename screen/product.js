import React, { Component } from 'react'
import {Platform, StyleSheet, ScrollView, View, Image} from 'react-native';
import { Container, Text, Button, Footer, FooterTab, Content, Header, Card, CardItem, Body, Right, Left, Thumbnail, Title } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import { ALL_PRODUCTS } from './actions/productaction';
import { ALL_ORDERS } from './actions/cartactions'
import axios from 'axios'

class ProductScreen extends Component{

    componentDidMount(){
        this.props.dispatch(ALL_PRODUCTS())
    }
    state = ({
        id: '',
        qty: 0
    })

    apiURL = 'http://192.168.43.58:3333/api/v1/order';

    add(id, price){
        this.setState({product_id: id,price: price})
        const config = {
            header: {
              'Content-Type': 'application/json'
            }
        }
        const data_order = {
            "product_id": id,
            "qty" : "1",
            "price": price
        }
        axios.post(this.apiURL, data_order , config).then((response) => {
            this.props.dispatch(ALL_ORDERS())
        }) 
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: '#3498db'}}>
                    <Left>
                        <Icon name="md-list-box" size={30} color="#fff"/>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Product</Title>
                    </Body>
                    <Right style={{textAlign: 'right'}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("Cart")}>
                            <Icon name="md-cart" size={30} color="#fff" style={{width: 50, justifyContent: 'center', textAlign: 'center'}}/>
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    {this.props.products.result.map((product, i) => (
                        <Card key={i}>
                            <CardItem>
                                <Left>
                                    <Thumbnail square large source={{uri: product.image_url}} />
                                </Left>
                                <Body style={{justifyContent: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15, color: '#333'}}>{product.name}</Text>
                                    <Text style={{fontSize: 12, color: '#999'}}>Rp.{product.price}</Text>
                                </Body>
                                <Right style={{textAlign: 'right'}}>
                                    <Button onPress={() => this.add(product.id, product.price) } style={{width: 50, height: 40, justifyContent: 'center', textAlign: 'center', backgroundColor: '#3498db'}}><Icon name="ios-add" size={30} style={{color: '#fff'}}/></Button>
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
    products: state.productReducers
})
  
export default connect(mapStateToProps)(ProductScreen)
// export default ProductScreen