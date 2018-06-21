import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import Toolbar from '../common/Toolbar';
import ViewItem from "./ViewItem";
import {firstData, secondData, thirdData} from "./Data";

export default class Account extends Component {

    constructor(props) {
        super(props);
    }

    renderCenterToolbar = () => {
        return (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Tài khoản</Text>
        )
    };

    renderRightToolbar = () => {
        return (
            <Image style={{width: 24, height: 24, tintColor: 'white'}} resizeMode={'stretch'}
                   source={require('../../../res/img/ic_search.png')}
            />
        )
    };

    renderItem = ({item}) => {
        return (
            <ViewItem
                content={item.content}
                color={'#0a53cc'}
            />
        )
    };

    renderItemSecond = ({item}) => {
        return (
            <ViewItem
                content={item.content}
                color={'#0c7e4f'}
            />
        )
    };

    renderItemThird = ({item}) => {
        return (
            <ViewItem
                content={item.content}
                color={'#686d71'}
            />
        )
    };

    renderSeparatorComponent = () => {
        return (
            <View
                style={{height: 0.5, backgroundColor: 'gray', marginLeft: 40, width: '100%'}}
            />
        )
    };

    renderHeaderList = () => {
        return (
            <View
                style={{height: 10, backgroundColor: '#aeaeae'}}
            />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    center={this.renderCenterToolbar()}
                    right={this.renderRightToolbar()}
                />
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
                    <View style={styles.containerLogin}>
                        <View style={styles.viewLogin}>
                            <Image
                                style={[styles.imageLeft, {tintColor: 'white'}]}
                                source={require('../../../res/img/ic_user.png')}
                                resizeMode={'stretch'}
                            />
                            <Text style={styles.textLogin}>Đăng nhập</Text>
                        </View>
                        <Image
                            style={styles.imageRight}
                            resizeMode={'stretch'}
                            source={require('../../../res/img/right-arrow.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                    <View>
                        <FlatList
                            data={firstData}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.renderSeparatorComponent}
                            ListHeaderComponent={this.renderHeaderList}
                        />
                    </View>

                    <View>
                        <FlatList
                            data={secondData}
                            renderItem={this.renderItemSecond}
                            ItemSeparatorComponent={this.renderSeparatorComponent}
                            ListHeaderComponent={this.renderHeaderList}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={thirdData}
                            renderItem={this.renderItemThird}
                            ItemSeparatorComponent={this.renderSeparatorComponent}
                            ListHeaderComponent={this.renderHeaderList}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogin: {
        padding: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewLogin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageLeft: {
        width: 24,
        height: 24
    },
    textLogin: {
        color: 'white'
    },
    imageRight: {
        width: 16,
        height: 16,
        tintColor: 'white'
    }
});