import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import realm from '../../model/RealmConfig'
import {USER_SCHEMA} from "../../model/User";
import {decrypt} from "../../util/Crypto";
import {strings} from "../../../res/string/strings";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeTextEmail = (text) => {
        this.setState({
            email: text
        })
    };

    onChangeTextPassword = (text) => {
        this.setState({
            password: text
        })
    };


    componentWillMount() {
        const userDao = realm.objects(USER_SCHEMA).filtered('Email = "levietnhutit@gmail.com"');

        userDao.map(item => console.log(item.Email));
    }

    onLogin = () => {
        if (!this.state.password || !this.state.email) {
            return;
        }

        const user = realm.objects(USER_SCHEMA).filtered('Email = $0', this.state.email);

        alert(user.Email);

        const password = decrypt(user.toString()).toString();

        if (this.state.password === password) {
            this.props.navigation.navigate('MainScreen');
        } else {
            alert("Login Failed");
        }

    };

    render() {

        return (
            <ImageBackground
                style={styles.imageCover}
                source={require('../../../res/img/ic_cover_login.jpg')}
                resizeMode='cover'
                blurRadius={5}>
                <KeyboardAwareScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image
                                        style={{width: 24, height: 24, tintColor: 'white'}}
                                        source={require('../../../res/img/left-arrow.png')}
                                        resize={'stretch'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.title}> Đăng nhập</Text>
                            </View>
                            <TouchableOpacity style={{marginTop: 30}}
                                              activeOpacity={0.8}>
                                <ButtonLogin
                                    colorBackground={'green'}
                                    urlImage={require('../../../res/img/smartphone.png')}
                                    text={'Số điện thoại'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop: 15}}
                                              activeOpacity={0.8}>
                                <ButtonLogin
                                    colorBackground={'#3b5998'}
                                    urlImage={require('../../../res/img/facebook.png')}
                                    text={'Facebook'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop: 15}}
                                              activeOpacity={0.8}>
                                <ButtonLogin
                                    colorBackground={'#DC4E41'}
                                    urlImage={require('../../../res/img/google-plus.png')}
                                    text={'Google'}
                                />
                            </TouchableOpacity>

                            <View style={{
                                marginTop: 30,
                                marginBottom: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'white'}}>Hoặc đăng nhập bằng tài khoản
                                    của bạn</Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: 'transparent',
                                    width: '100%',
                                    borderRadius: 4,
                                    borderWidth: 0.5,
                                    borderColor: 'white',
                                    flexDirection: 'column'
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingLeft: 5,
                                        paddingRight: 5
                                    }}>

                                    <Image
                                        source={require('../../../res/img/ic_mail.png')}
                                        style={{
                                            width: 16,
                                            height: 16,
                                            marginRight: 5
                                        }}
                                        resizeMode={'stretch'}
                                    />
                                    <TextInput
                                        style={{color: 'white', width: '100%'}}
                                        placeholder={strings.login.email}
                                        placeholderTextColor={'#acacac'}
                                        keyboardType={'email-address'}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        numberOfLines={1}

                                        onSubmitEditing={(event) => {
                                            this.refs.Password.focus();
                                        }}

                                        onChangeText={this.onChangeTextEmail}
                                        value={this.state.email}

                                        returnKeyType={'next'}
                                    />

                                </View>
                                <View style={{height: 0.5, width: '100%', backgroundColor: 'white'}}/>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingLeft: 5,
                                        paddingRight: 5
                                    }}>

                                    <Image
                                        source={require('../../../res/img/ic_lock.png')}
                                        style={{
                                            width: 16,
                                            height: 16,
                                            marginRight: 5
                                        }}
                                        resizeMode={'stretch'}
                                    />
                                    <TextInput

                                        ref='Password'

                                        style={{color: 'white', width: '100%'}}
                                        placeholderTextColor={'#acacac'}
                                        placeholder={strings.login.password}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        secureTextEntry={true}
                                        numberOfLines={1}

                                        onChangeText={this.onChangeTextPassword}
                                        value={this.state.password}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{width: '100%'}}
                                activeOpacity={1}
                                onPress={this.onLogin}>
                                <View style={{
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    borderRadius: 4,
                                    marginTop: 15,
                                }}>
                                    <Text style={{color: 'black'}}>Đăng nhập</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{marginTop: 20, alignItems: 'center'}}>
                                <Text style={{
                                    color: '#acacac',
                                    textDecorationLine: 'underline'
                                }}>Quên mật khẩu?</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Đăng ký</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}


class ButtonLogin extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: this.props.colorBackground,
                borderRadius: 4,
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 10
            }}>
                <Image
                    source={this.props.urlImage}
                    resizeMode='stretch'
                    style={{width: 24, height: 24}}
                />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageCover: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30
    }
});