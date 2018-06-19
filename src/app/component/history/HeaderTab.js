import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {sizeWidth} from "../../util/Size";
import {APP_COLOR} from "../../../res/style/AppStyle";


export default class HeaderTab extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.itemSelected}
                >
                    <Text style={{color: APP_COLOR}}>Đang Đến</Text>
                </View>

                <View style={styles.separator}/>

                <View
                    style={styles.item}
                >
                    <Text style={{color: 'white'}}>Lịch sử</Text>
                </View>

                <View style={styles.separator}/>

                <View
                    style={styles.item}
                >
                    <Text style={{color: 'white'}}>Đơn nhập</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: sizeWidth(70),
        height: 36,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        marginTop: 10,
        marginRight: 20
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemSelected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    separator: {
        width: 1,
        marginTop: 3,
        marginBottom: 3,
        backgroundColor: 'white'
    }
});