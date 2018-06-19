/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import StackNavigator from './src/app/router/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <StackNavigator/>
        );
    }
}
