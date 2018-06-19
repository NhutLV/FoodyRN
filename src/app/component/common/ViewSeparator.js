import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class ViewSeparator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {style} = this.props;

        return (
            <View style={[styles.container, style]}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 8,
        backgroundColor: '#d4d4d4',
        width: '100%'
    }
});