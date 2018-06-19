import React, {Component} from 'react';
import {Dimensions, FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';

const width = Dimensions.get('window').width;

export default class ItemListHome extends Component {

    constructor(props) {
        super(props);
    }

    renderFooterListView = () => {
        return (
            <View
                style={{height: 10, backgroundColor: 'gray', width: '100%'}}
            />
        )
    };

    render() {
        const {category, data} = this.props;

        return (
            <View style={styles.container}>
                <Text style={{color: 'black', marginBottom: 10, fontWeight: 'bold'}}>{category}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    ListFooterComponent={this.renderFooterListView}
                    renderItem={({item}) => {
                        return (
                            <ItemView
                                imageUrl={item.imageUrl}
                                sale={item.sale}
                                name={item.name}
                                address={item.address}
                                isOnline={item.isOnline}
                            />
                        )
                    }}
                />
            </View>
        )
    }
}

class ItemView extends Component {
    render() {
        return (
            <View style={styles.containerItem}>
                <ImageBackground style={styles.imgBackground}
                                 borderRadius={4}
                                 source={this.props.imageUrl}
                                 resizeMode={'cover'}>
                    <View style={{alignItems: 'flex-start'}}>
                        {this.props.isOnline && <View style={styles.viewOnline}/>}
                    </View>
                    <View style={styles.viewSale}>
                        <Text style={styles.textSale} numberOfLines ={1}>{this.props.sale}</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.textNameShop}
                      numberOfLines={1}
                      ellipsizeMode='tail'>
                    {this.props.name}
                </Text>
                <Text style={styles.textNumberAddress} numberOfLines={1}>
                    {this.props.address}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    containerItem: {
        width: width / 2.7,
        marginRight: 15
    },
    imgBackground: {
        width: width / 2.7,
        height: width / 4.5,
        justifyContent: 'space-between'
    },
    viewSale: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        opacity: 0.8,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        padding: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textSale: {
        color: 'red',
        fontSize: 10,
        textAlign: 'center'
    },
    textNameShop: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 12
    },
    textNumberAddress: {
        color: '#979797',
        fontSize: 10
    },
    viewOnline: {
        width: 10,
        height: 10,
        backgroundColor: '#22cc24',
        borderRadius: 5
    }
});