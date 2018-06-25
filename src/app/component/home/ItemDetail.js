import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';

import {dataDetails} from './Data'
import ToolBar from "../common/Toolbar";

export default class ItemDetail extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navigation.navigate('ItemScreen')
    };

    renderItem = ({item}) => {
        return (
            <ItemDetailView
                onPress={() => this.onPress()}
                imageUrl={item.imageUrl}
                name={item.name}
                address={item.address}
                minCost={item.minCost}
                cost={item.cost}
                sale={item.sale}
                promotion={item.promotion}
            />
        )
    };

    renderCenterToolbar = () => {
        const {navigation} = this.props;
        const title = navigation.getParam('title', 'Default Title');

        return (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        )
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

    render() {

        return (
            <View style={styles.container}>
                <ToolBar
                    center={this.renderCenterToolbar()}
                    left={this.renderLeftToolbar()}
                />
                <FlatList
                    data={dataDetails}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: '#dadada'}}/>}
                />
            </View>
        )
    }
}


class ItemDetailView extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.containerItem}>
                    <Image style={styles.image}
                           source={this.props.imageUrl}
                    />
                    <View style={styles.containerRight}>
                        <Text style={styles.textName} numberOfLines={1}>{this.props.name}</Text>
                        <Text style={styles.textAddress} numberOfLines={1}>{this.props.address}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={styles.icon}
                                source={require('../../../res/img/ic_mincost.png')}
                            />
                            <Text style={styles.textCost}>Tối thiểu {this.props.minCost}k</Text>
                            <Image
                                style={[styles.icon, {marginLeft: 10}]}
                                source={require('../../../res/img/ic_cost.png')}
                            />
                            <Text style={styles.textCost}>Giá {this.props.cost}k</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Image style={[styles.icon, {tintColor: 'red'}]}
                                       source={require('../../../res/img/ic_sale.png')}
                                />
                                <Text
                                    numberOfLines={1}
                                    style={styles.textCost}
                                >{this.props.sale}</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', paddingLeft: 15, justifyContent: 'center'}}>
                                <Text style={styles.textPromotion}
                                      numberOfLines={1}>{this.props.promotion}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    containerRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    image: {
        width: 80,
        height: 80
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 5,
        tintColor: 'black'
    },
    textName: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    textAddress: {
        fontSize: 12,
        color: '#9c9c9c'
    },
    textCost: {
        fontSize: 11,
        color: 'black'
    },
    textPromotion: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#2275cc'
    }
});