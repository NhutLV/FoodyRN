import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {APP_COLOR} from "../../../res/style/AppStyle";
import {ButtonGroup, Button} from 'react-native-elements';
import {sizeWidth} from "../../util/Size";

export default class TabHeader extends Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Đang đến', 'Lịch sử', 'Đơn nháp']
        const {selectedIndex} = this.state

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{
                    height: 32,
                    width: sizeWidth(70),
                    backgroundColor: APP_COLOR
                }}
                innerBorderStyle={{
                    color: 'white',
                }}
                textStyle={{
                    color: 'white',
                    fontSize: 12
                }}
                selectedTextStyle={{
                    color: APP_COLOR
                }}
                selectedButtonStyle={{
                    // backgroundColor: 'white'
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewItem: {
        backgroundColor: 'white',
        flex: 1,
    }
});