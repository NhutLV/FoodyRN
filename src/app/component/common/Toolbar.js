import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import PropTypes from 'prop-types'
import {sizeHeight, sizeWidth} from "../../util/Size";
import {APP_COLOR, STATUS_BAR_HEIGHT} from "../../../res/style/AppStyle";

export default class ToolBar extends Component {

    render() {
        const {left, center, right} = this.props;
        return (
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.container}>
                    <View style={styles.side}>
                        {left}
                    </View>
                    <View style={styles.center}>
                        {center}
                    </View>
                    <View style={styles.side}>
                        {right}
                    </View>
                </View>
            </View>

        );
    }
}

ToolBar.propTypes = {
    left: PropTypes.object,
    center: PropTypes.object,
    right: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(6.9),
        paddingLeft: sizeWidth(2.66),
        paddingRight: sizeWidth(2.66),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: APP_COLOR,
        alignItems: 'center',
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: APP_COLOR,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    side : {
        width: sizeWidth(10),
    }
});

