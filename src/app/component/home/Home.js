import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import {list} from "./Data";
import ItemListHome from "./ItemListHome";
import ViewSeparator from '../common/ViewSeparator'

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {list.map((item) => {
                    return (
                        <View>
                            <ItemListHome
                                screenProps={{rootHome: this.props.navigation}}
                                category={item.category}
                                data={item.data}
                            />
                            <ViewSeparator/>
                        </View>
                    );
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});