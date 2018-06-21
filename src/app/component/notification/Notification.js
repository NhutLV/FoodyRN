import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import ToolBar from "../common/Toolbar";
import {NotifyTabNavigator} from "./NotifyTabNavigator";

export default class Notification extends Component {

    constructor(props) {
        super(props);
    }

    renderCenterToolbar = () => {
        return (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Thông báo</Text>
        )
    };

    renderRightToolbar = () => {
        return (
            <Image style={{width: 24, height: 24, tintColor: 'white'}} resizeMode={'stretch'}
                   source={require('../../../res/img/ic_search.png')}
            />
        )
    };

    renderLeftToolbar = () => {
        return (
            <Image style={{width: 24, height: 24, tintColor: 'white'}} resizeMode={'stretch'}
                   source={require('../../../res/img/ic_setting.png')}
            />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar
                    center={this.renderCenterToolbar()}
                    right={this.renderRightToolbar()}
                    left={this.renderLeftToolbar()}
                />
                <NotifyTabNavigator
                    screenProps={{notifyNav: this.props.navigation}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});