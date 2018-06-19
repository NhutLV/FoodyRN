import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableWithoutFeedback, Image
} from 'react-native';

export default class ServiceNotify extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
                    <Image
                        source={require('../../../../res/img/user_profile.png')}
                        resizeMode={'stretch'}
                        style={styles.image}
                    />
                </TouchableWithoutFeedback>
                <Text>Bạn phải đăng nhập để xem</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20
    }
});