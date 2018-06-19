import React, {Component} from 'react';
import RememberAll from './tab/RememberAll';
import RememberAddress from './tab/RememberAddress';
import RememberImage from './tab/RememberImage';
import RememberPostNavigation from './tab/RememberPost';

import {TabNavigator, withNavigation} from 'react-navigation';

const RememberTabNavigator = TabNavigator({
    All: {
        screen: RememberAll,
        navigationOptions: {
            title: 'Tất cả',
        }
    },
    Address: {
        screen: RememberAddress,
        navigationOptions: {
            title: 'Địa chỉ',
        }
    },
    Image: {
        screen: RememberImage,
        navigationOptions: {
            title: 'Hình ảnh',
        }
    },
    Post: {
        screen: RememberPostNavigation,
        navigationOptions: {
            title: 'Bài viết',
        }
    }
}, {

    tabBarPosition: 'top',
    tabBarOptions: {
        showIcon: false,
        showLabel: true,
        style: {
            height: 42,
            backgroundColor: 'white',
        },
        tabStyle: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        upperCaseLabel: false,
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        labelStyle: {
            fontSize: 12
        },
        indicatorStyle: {
            backgroundColor: 'blue'
        }

    },
    swipeEnabled: false,
    animationEnabled: false
});

export default RememberTabNavigator;