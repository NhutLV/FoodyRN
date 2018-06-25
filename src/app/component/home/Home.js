import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
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
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('FoodyNews')}>
                    <View style={{margin: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'red', fontSize: 30}}>Foody</Text>
                    </View>
                </TouchableWithoutFeedback>
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