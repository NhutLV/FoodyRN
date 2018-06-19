import React from 'react';
import {TabNavigator} from 'react-navigation';

import MyNotify from './tab/MyNotify';
import NewsNotify from './tab/NewsNotify';
import ServiceNotify from './tab/ServiceNotify';

export const NotifyTabNavigator = TabNavigator({
    Service: {
        screen: ServiceNotify,
        navigationOptions: {
            title: 'Dịch vụ'
        }
    },
    MyNotify: {
        screen: MyNotify,
        navigationOptions: {
            title: 'Của tôi'
        }
    },
    NewNotify: {
        screen: NewsNotify,
        navigationOptions: {
            title: 'Tin mới'
        }
    }
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
        showIcon: false,
        showLabel: true,
        style: {
            height: 46,
            backgroundColor: 'white',
        },
        tabStyle: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        upperCaseLabel: false,
        activeTintColor: '#1aa0e1',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 14,
            justifyContent: 'center',
            alignItems: 'center'
        },
        indicatorStyle: {
            backgroundColor: '#1aa0e1',
            height: 3.5
        }

    },
    swipeEnabled: false,
    animationEnabled: false
});