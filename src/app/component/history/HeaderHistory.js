import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import {sizeWidth} from "../../util/Size";
import {APP_COLOR, STATUS_BAR_HEIGHT} from "../../../res/style/AppStyle";
import TabHeader from "./TabHeader";
import HeaderTab from "./HeaderTab";

export default class HeaderHistory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{backgroundColor: APP_COLOR}}>
                <View style={styles.statusBar}/>
                <View style={styles.containerHeader}>
                    <View style={styles.containerHeader}>
                        <View style={styles.side}>

                        </View>
                        <View style={styles.center}>
                            <TabHeader/>
                        </View>
                        <View style={styles.side}>
                            <Image style={{width: 24, height: 24, tintColor: 'white'}} resizeMode={'stretch'}
                                   source={require('../../../res/img/ic_search.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{height: 40, margin: 10}}>
                    <TextInput
                        placeHolder={'Mã đặt nhóm'}
                        clearButtonMode={'while-editing'}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        paddingRight: sizeWidth(2.66),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: APP_COLOR,
    },
    side: {
        width: sizeWidth(10),
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});