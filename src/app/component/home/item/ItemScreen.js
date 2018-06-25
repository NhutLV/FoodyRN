import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    WebView
} from 'react-native';

export default class ItemScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Item Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});