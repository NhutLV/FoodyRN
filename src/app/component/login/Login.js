import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageCover}
                    source={require('../../../res/img/ic_cover_login.jpg')}
                    resizeMode='cover'
                    blurRadius={5}>
                    <KeyboardAwareScrollView style={{flex: 1}}>
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

                        <View style={{marginTop: 30, marginBottom: 30, justifyContent: 'center', alignItems: 'center'}}>
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
                                    placeholder={'Địa chỉ Email của bạn'}
                                    placeholderTextColor={'#acacac'}
                                    keyboardType={'email-address'}
                                    underlineColorAndroid='rgba(0,0,0,0)'
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
                                    style={{color: 'white', width: '100%'}}
                                    placeholderTextColor={'#acacac'}
                                    placeholder={'Mật khẩu của bạn'}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{width: '100%'}}
                            activeOpacity={1}
                        >
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
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
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