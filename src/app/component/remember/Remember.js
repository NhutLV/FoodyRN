import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import Toolbar from '../common/Toolbar';
import RememberTabNavigator from "./RememberTabNavigator";

export default class Remember extends Component {

    constructor(props) {
        super(props);
    }

    renderCenterToolbar = () => {
        return (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Đã lưu</Text>
        )
    };

    renderRightToolbar = () => {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
                <Image style={{width: 24, height: 24, tintColor: 'white'}} resizeMode={'stretch'}
                       source={require('../../../res/img/ic_search.png')}
                />
            </TouchableWithoutFeedback>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Toolbar center={this.renderCenterToolbar()} right={this.renderRightToolbar()}/>
                <RememberTabNavigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});