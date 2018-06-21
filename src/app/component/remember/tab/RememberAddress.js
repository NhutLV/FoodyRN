import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

export default class RememberAddress extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const rootNav = this.props.screenProps.rootNavigation;

        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ModalDropdown
                            ref='DropDown'
                            style={{marginLeft: 30}}
                            defaultIndex={0}
                            defaultValue={'Mới nhất'}
                            dropdownTextStyle={{
                                fontSize: 14
                            }}

                            textStyle={{
                                color: '#2169bd',
                                fontSize: 14
                            }}

                            options={['Mới nhất', "Gần tôi", "Xếp hạng"]}
                        />
                        <TouchableWithoutFeedback onPress={() => this.refs.DropDown.show()}>
                            <Image
                                style={{width: 16, height: 16, marginLeft: 15, tintColor: 'gray'}}
                                source={require('../../../../res/img/drop-down-arrow.png')}
                                resizeMode={'stretch'}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.containerContent}>
                    <TouchableWithoutFeedback onPress={() => rootNav.navigate('Login')}>
                        <Image
                            source={require('../../../../res/img/user_profile.png')}
                            resizeMode={'stretch'}
                            style={styles.image}
                        />
                    </TouchableWithoutFeedback>
                    <Text>Bạn phải đăng nhập để xem</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader: {
        height: 40,
        backgroundColor: '#c1c1c1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 20
    }
});