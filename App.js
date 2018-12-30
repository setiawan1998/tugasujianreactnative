import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Text, Button, Footer, FooterTab, Content, Header } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import ProductScreen from './screen/product';
import CartScreen from './screen/cart';
import ProfileScreen from './screen/profile';

const AppNavigator = createBottomTabNavigator(
  {
    Product: ProductScreen,
    Cart: CartScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let sizeIcon;
        if(routeName === "Product"){
          iconName = `md-list-box`;
          sizeIcon = 30
        }
        else if(routeName === "Cart"){
          iconName = `ios-cart`;
          sizeIcon = 30
        }
        else if(routeName === "Profile"){
          iconName = `md-person`;
          sizeIcon = 30
        }

        return <Icon name={iconName} size={sizeIcon} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#3498db',
      inactiveTintColor: '#7f8c8d',
      style: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        height: 60
      }
    }
  }
)
export default createAppContainer(AppNavigator)