import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';
import {APP_COLOR} from "../../../res/style/AppStyle";

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 100);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Foody</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_COLOR
    },
    text: {
        fontSize: 30,
        color: 'white',
    }
});