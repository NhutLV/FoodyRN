import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class ViewItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLeft}>
                    <View style={[styles.viewImage, {backgroundColor: this.props.color}]}>
                        <Image
                            style={[styles.imageLeft, {tintColor: 'white'}]}
                            source={require('../../../res/img/ic_user.png')}
                            resizeMode={'stretch'}
                        />
                    </View>
                    <Text style={styles.textLeft}>{this.props.content}</Text>
                </View>
                <Image
                    style={styles.imageRight}
                    resizeMode={'stretch'}
                    source={require('../../../res/img/right-arrow.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    viewLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    imageLeft: {
        width: 16,
        height: 16
    },
    textLeft: {
        color: 'black'
    },
    imageRight: {
        width: 16,
        height: 16,
        tintColor: 'gray'
    }
});