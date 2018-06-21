import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

export default class RememberImage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const rootNav = this.props.screenProps.rootNavigation;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => rootNav.navigate('Login')}>
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