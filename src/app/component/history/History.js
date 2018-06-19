import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import HeaderHistory from './HeaderHistory'

export default class History extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderHistory/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});