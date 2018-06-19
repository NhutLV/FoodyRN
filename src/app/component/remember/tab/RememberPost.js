import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {withNavigation} from 'react-navigation';

class RememberPost extends Component {

    constructor(props) {
        super(props);
    }

    goToLoginScreen = () => {
        alert("GoTo Login Screen");

        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.goToLoginScreen}>
                    <Image
                        source={require('../../../../res/img/user_profile.png')}
                        style={styles.image}
                        resizeMode={'stretch'}
                    />
                </TouchableWithoutFeedback>
                <Text>Bạn phải đăng nhập để xem</Text>
            </View>
        )
    }
}

const RememberPostNavigation = withNavigation(RememberPost);

export default RememberPostNavigation;

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