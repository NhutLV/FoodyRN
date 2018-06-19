import React from 'react';
import {createTabNavigator} from 'react-navigation';
import {Image, StyleSheet} from 'react-native';

import Home from '../component/home/Home';
import Notification from '../component/notification/Notification';
import Remember from '../component/remember/Remember';
import Account from '../component/account/Account';
import History from '../component/history/History';

import {APP_COLOR} from '../../res/style/AppStyle'

export const MainNavigator = createTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                focused ?
                    <Image style={styles.iconFocused} source={require('../../res/img/ic_home.png')}
                           resizeMode={'stretch'}/>
                    : <Image style={styles.icon} source={require('../../res/img/ic_home.png')} resizeMode={'stretch'}/>
            )
        }
    },
    Remember: {
        screen: Remember,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                focused ?
                    <Image style={styles.iconFocused} source={require('../../res/img/ic_remember.png')}
                           resizeMode={'stretch'}/>
                    : <Image style={styles.icon} source={require('../../res/img/ic_remember.png')}
                             resizeMode={'stretch'}/>
            )
        }
    },
    History: {
        screen: History,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                focused ?
                    <Image style={styles.iconFocused} source={require('../../res/img/ic_history.png')}
                           resizeMode={'stretch'}/>
                    :
                    <Image style={styles.icon} source={require('../../res/img/ic_history.png')} resizeMode={'stretch'}/>
            )
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                focused ?
                    <Image style={styles.iconFocused} source={require('../../res/img/ic_notifications_focused.png')}
                           resizeMode={'stretch'}/>
                    : <Image style={styles.icon} source={require('../../res/img/ic_notifications_focused.png')}
                             resizeMode={'stretch'}/>
            )
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                focused ?
                    <Image style={styles.iconFocused} source={require('../../res/img/ic_account.png')}
                           resizeMode={'stretch'}/>
                    :
                    <Image style={styles.icon} source={require('../../res/img/ic_account.png')} resizeMode={'stretch'}/>
            )
        }
    }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',

    navigationOptions: {},

    tabBarOptions: {
        activeTintColor: APP_COLOR,
        inactiveTintColor: 'gray',

        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        style: {
            height: 54,
            backgroundColor: 'white',
            padding: 5
        },
        tabStyle: {
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    swipeEnabled: false,
    animationEnabled: true
});

const styles = StyleSheet.create({
    iconFocused: {
        width: 24,
        height: 24,
        tintColor: APP_COLOR
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'gray'
    }
});