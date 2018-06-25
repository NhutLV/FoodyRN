import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, Button, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback
} from 'react-native';
import Modal from "react-native-modal";

import {data} from './item/Data';
import ToolBar from "../common/Toolbar";
import {sizeHeight} from "../../util/Size";
import ItemNews from "./item/ItemNews";
import {dataNews} from "./item/Data";

export default class FoodyNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    onHideModal = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };

    renderLeftToolbar = () => {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require('../../../res/img/left-arrow.png')}
                    style={{width: 24, height: 24, tintColor: 'white'}}
                    resizeMode={'stretch'}
                />
            </TouchableWithoutFeedback>
        )
    };

    renderItemNews = ({item}) => {
        return (
            <ItemNews
                rating={item.rating}
                name={item.name}
                address={item.address}
                imageUrl={item.imageUrl}
                sale={item.sale}
                comment1={item.comment1}
                comment2={item.comment2}
                state={item.state}
                totalImage={item.totalImage}
                totalComment={item.totalComment}
                isOpen={item.isOpen}
            />
        )
    };

    renderRightToolbar = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableWithoutFeedback>
                    <Image
                        style={{width: 24, height: 24, tintColor: 'white'}}
                        source={require('../../../res/img/ic_add.png')}
                        resizeMode={'stretch'}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image
                        style={{width: 24, height: 24, tintColor: 'white', marginRight: 15, marginLeft: 15}}
                        source={require('../../../res/img/ic_search.png')}
                        resizeMode={'stretch'}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    };

    renderCenterToolbar = () => {
        return (
            <TouchableWithoutFeedback onPress={this.onHideModal}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Ở đâu</Text>
                    {!this.state.isVisible && <Image
                        source={require('../../../res/img/down-arrow.png')}
                        style={{width: 10, height: 10, tintColor: 'white'}}
                        resizeMode={'stretch'}
                    />}

                    {this.state.isVisible && <Image
                        source={require('../../../res/img/ic_up.png')}
                        style={{width: 10, height: 10, tintColor: 'white'}}
                        resizeMode={'stretch'}
                    />}
                </View>
            </TouchableWithoutFeedback>
        )
    };


    renderSeparatorComponent = () => {
        return (
            <View
                style={{height: 10, backgroundColor: '#aeaeae'}}
            />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ToolBar
                        center={this.renderCenterToolbar()}
                        left={this.renderLeftToolbar()}
                        right={this.renderRightToolbar()}
                    />
                    <Modal style={styles.bottomModal}
                           visible={this.state.isVisible}
                           onBackdropPress={this.onHideModal}
                           animationInTiming={2000}
                           animationOutTiming={2000}>
                        <View style={{backgroundColor: '#cfcfcf', padding: 3}}>
                            <FlatList
                                data={data}
                                numColumns={2}
                                renderItem={({item}) => {
                                    return (
                                        <ItemView
                                            imageUrl={item.imageUrl}
                                            category={item.category}
                                        />
                                    )
                                }}
                            />
                        </View>
                        <TouchableOpacity onPress={this.onHideModal}>
                            <View style={{
                                padding: 10,
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'black'}}>Đóng</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableWithoutFeedback onPress={this.onHideModal}>
                            <View
                                style={{flex: 1, backgroundColor: '#a8a8a8', opacity: 0.8}}
                            />
                        </TouchableWithoutFeedback>
                    </Modal>

                    <FlatList
                        data={dataNews}
                        renderItem={this.renderItemNews}
                        ItemSeparatorComponent={this.renderSeparatorComponent}
                    />
                </View>

            </View>
        )
    }

    componentWillUnmount() {
        this.setState({
            isVisible: false
        })
    }
}

class ItemView extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                borderRadius: 4,
                backgroundColor: 'white',
                padding: 5,
                margin: 6,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{width: 24, height: 24, marginRight: 10}}
                        source={this.props.imageUrl}
                        resizeMode={'stretch'}
                    />
                    <Text style={{color: 'black'}}>{this.props.category}</Text>
                </View>
                <Image/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomModal: {
        justifyContent: "flex-start",
        margin: 0,
        marginTop: sizeHeight(6.9)
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
});