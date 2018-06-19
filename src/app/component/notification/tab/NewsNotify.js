import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback, Image, FlatList
} from 'react-native';
import {data} from "./NewsData";

export default class NewsNotify extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList

                    data={data}

                    renderItem={({item}) => {
                        return (
                            <View>
                                <ItemView
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    content={item.content}
                                    time={item.time}
                                />
                                <View
                                    style={{height: 0.5, backgroundColor: 'gray'}}/>
                            </View>
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
            <TouchableWithoutFeedback>
                <View style={styles.containerItem}>
                    <Image
                        style={styles.imgItem}
                        resizeMode={'stretch'}
                        source={this.props.imageUrl}
                    />
                    <View style={{marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.titleItem}>{this.props.title}</Text>
                        <Text style={styles.contentItem}>{this.props.content}</Text>
                        <Text style={styles.timeItem}>{this.props.time}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    containerItem: {
        flexDirection: 'row',
        padding: 10
    },
    imgItem: {
        width: 80,
        height: 80
    },
    titleItem: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    },
    contentItem: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 8
    },
    timeItem: {
        color: '#c5c5c5',
        fontSize: 11,
        marginBottom: 10
    }
});