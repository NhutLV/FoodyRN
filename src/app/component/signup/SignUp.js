import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground, TouchableOpacity
} from 'react-native';

import {USER_SCHEMA} from "../../model/User";
import realm from '../../model/RealmConfig'
import {encrypt} from "../../util/Crypto";

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        }
    }

    componentWillMount() {
    };

    componentDidMount() {
    }

    onChangeTextEmail = (email) => {
        this.setState(
            {email: email}
        )
    };

    onChangeTextPassword = (password) => {
        this.setState(
            {password: password}
        )
    };

    onChangeTextDisplayName = (displayName) => {
        this.setState(
            {displayName: displayName}
        )
    };

    onChangeTextConfirmPassword = (confirmPassword) => {
        this.setState(
            {confirmPassword: confirmPassword}
        )
    };

    onSignUp = () => {
        if (this.validate(this.state.email, this.state.password, this.state.confirmPassword, this.state.displayName)) {
            try {
                realm.write(() => {
                    realm.create(USER_SCHEMA, {
                        Email: this.state.email,
                        Password: encrypt(this.state.password),
                        DisplayName: this.state.displayName
                    })
                });

                this.props.navigation.navigate('MainScreen');
            } catch (e) {
                alert(e.toString())
            }
        }
    };

    validate(email, password, confirmPassword, displayName): boolean {
        if (!email) {
            alert('Vui lòng nhập Email');
            return false;
        }

        if (!password) {
            alert('Vui lòng nhập mật khẩu');
            return false;
        }
        if (!confirmPassword) {
            alert('Vui lòng nhập lại mật khẩu');
            return false;
        }
        if (!displayName) {
            alert('Vui lòng nhập tên hiển thị');
            return false;
        }

        if (!this.validateEmail(email)) {
            alert('Email chưa hợp lệ')
            return false;
        }

        if (password.trim() !== confirmPassword.trim()) {
            alert('Mật khẩu nhập lại chưa chính xác');
            return false;
        }
        return true;
    };

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={require('../../../res/img/ic_cover_login.jpg')}
                             resizeMode={'cover'}
                             blurRadius={10}>
                <View style={{justifyContent: 'center', alignItems: 'center', padding: 20, flex: 1}}>
                    <View
                        style={styles.containerInput}>
                        <View
                            style={styles.viewInput}>

                            <Image
                                source={require('../../../res/img/ic_mail.png')}
                                style={styles.image}
                                resizeMode={'stretch'}
                            />
                            <TextInput
                                style={{color: 'white', width: '100%'}}
                                placeholder={'Địa chỉ Email của bạn'}
                                placeholderTextColor={'#acacac'}
                                keyboardType={'email-address'}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                onChangeText={this.onChangeTextEmail}
                                value={this.state.email}
                            />

                        </View>
                        <View style={{height: 0.5, width: '100%', backgroundColor: 'white'}}/>
                        <View
                            style={styles.viewInput}>

                            <Image
                                source={require('../../../res/img/ic_lock.png')}
                                style={styles.image}
                                resizeMode={'stretch'}
                            />
                            <TextInput
                                style={{color: 'white', width: '100%'}}
                                placeholderTextColor={'#acacac'}
                                placeholder={'Mật khẩu của bạn'}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                secureTextEntry={true}
                                numberOfLines={1}
                                onChangeText={this.onChangeTextPassword}
                                value={this.state.password}
                            />
                        </View>
                        <View style={{height: 0.5, width: '100%', backgroundColor: 'white'}}/>
                        <View
                            style={styles.viewInput}>

                            <Image
                                source={require('../../../res/img/ic_lock.png')}
                                style={styles.image}
                                resizeMode={'stretch'}
                            />
                            <TextInput
                                style={{color: 'white', width: '100%'}}
                                placeholderTextColor={'#acacac'}
                                placeholder={'Nhập lại mật khẩu'}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                secureTextEntry={true}
                                numberOfLines={1}
                                onChangeText={this.onChangeTextConfirmPassword}
                                value={this.state.confirmPassword}
                            />
                        </View>
                        <View style={{height: 0.5, width: '100%', backgroundColor: 'white'}}/>
                        <View
                            style={styles.viewInput}>

                            <Image
                                source={require('../../../res/img/user_profile.png')}
                                style={[styles.image, {tintColor: 'white'}]}
                                resizeMode={'stretch'}
                            />
                            <TextInput
                                style={{color: 'white', width: '100%'}}
                                placeholderTextColor={'#acacac'}
                                placeholder={'Tên hiển thị'}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                onChangeText={this.onChangeTextDisplayName}
                                value={this.state.displayName}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{width: '100%'}}
                        activeOpacity={1}
                        onPress={this.onSignUp}
                    >
                        <View style={styles.viewSignUp}>
                            <Text style={{color: 'black'}}>Đăng ký</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        marginTop: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: '#CCCCCC', fontSize: 10}}>Chúng tôi không sử dụng thông tinc ủa bạn với bất
                            kỳ mục đích nào khác</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInput: {
        backgroundColor: '#535353',
        width: '100%',
        borderRadius: 4,
        opacity: 0.4,
        borderWidth: 0.5,
        borderColor: 'white',
        flexDirection: 'column'
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    image: {
        width: 16,
        height: 16,
        marginRight: 5,
        marginLeft: 5
    },
    viewSignUp: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 4,
        marginTop: 15,
    }
});