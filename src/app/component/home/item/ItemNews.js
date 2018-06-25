import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';
import {APP_COLOR} from "../../../../res/style/AppStyle";

export default class ItemNews extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInfo}>
                    <View style={styles.viewRating}>
                        <Text style={styles.textRating}>{this.props.rating}</Text>
                    </View>
                    <View style={styles.viewName}>
                        <Text style={styles.textName}>{this.props.name}</Text>
                        <Text style={styles.textAddress}>{this.props.address}</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
                <Image style={styles.viewGallery}
                       source={this.props.imageUrl}
                       resizeMode={'cover'}
                />
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.viewSale}>
                        <Image style={styles.imageSale}
                               source={require('../../../../res/img/delivery.png')}
                        />
                        <Text style={styles.textSale}>{this.props.sale}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewComment}>
                    <Image style={styles.imageComment}
                           source={require('../../../../res/img/ic_avatar.png')}
                    />
                    <Text style={styles.textComment} numberOfLines={2}>{this.props.comment1}</Text>
                </View>
                <View style={styles.viewComment}>
                    <Image style={styles.imageComment}
                           source={require('../../../../res/img/ic_avatar.png')}
                    />
                    <Text style={styles.textComment} numberOfLines={2}>{this.props.comment2}</Text>
                </View>
                <View style={styles.viewBottom}>
                    <View style={styles.viewStatistic}>
                        <View style={styles.itemStatistic}>
                            <Image
                                style={styles.imageStatistic}
                                source={require('../../../../res/img/ic_comment.png')}
                            />
                            <Text style={styles.textStatistic}>{this.props.totalComment}</Text>
                        </View>
                        <View style={styles.itemStatistic}>
                            <Image
                                style={styles.imageStatistic}
                                source={require('../../../../res/img/ic_photo.png')}
                            />
                            <Text style={styles.textStatistic}>{this.props.totalImage}</Text>
                        </View>
                    </View>
                    <View style={styles.viewStatus}>
                        {this.props.isOpen && <Text style={styles.textStatus}>{this.props.state}</Text>}
                        {!this.props.isOpen && <Text style={styles.textStatus}>Chưa mở cửa</Text>}
                        {this.props.isOpen && <View style={styles.dotStatus}/>}
                        {!this.props.isOpen && <View style={[styles.dotStatus, {backgroundColor: '#8a8a8a'}]}/>}
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
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    viewRating: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e9c3a',
        marginRight: 10,
        marginLeft: 5
    },
    textRating: {
        color: 'white',
        fontSize: 14
    },
    viewName: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textName: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textAddress: {
        color: '#7e7e7e',
        fontSize: 12
    },
    viewGallery: {
        width: '100%',
        height: 200
    },
    viewSale: {
        backgroundColor: APP_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
        borderRadius: 4
    },
    imageSale: {
        width: 12,
        height: 12,
        tintColor: 'white',
        marginBottom: 3
    },
    textSale: {
        color: 'white',
        fontSize: 12
    },
    viewComment: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    imageComment: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10
    },
    textComment: {
        flex: 1,
        color: '#585858',
        fontSize: 13,
    },
    viewBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 50,
        padding: 8
    },
    viewStatistic: {
        flexDirection: 'row',
    },
    itemStatistic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    imageStatistic: {
        width: 16,
        height: 16,
        marginRight: 4,
        tintColor: '#979797'
    },
    textStatistic: {
        fontSize: 12,
        color: '#8c8c8c'
    },
    viewStatus: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStatus: {
        fontSize: 12,
        color: '#8f8f8f',
        marginRight: 5
    },
    dotStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#18aa0e'

    }

});