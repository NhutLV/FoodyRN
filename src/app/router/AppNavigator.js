import {StackNavigator} from 'react-navigation';
import SplashScreen from '../component/splash/SplashScreen'
import {MainNavigator} from './MainNavigator'
import Login from "../component/login/Login";

export default StackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    MainScreen: {
        screen: MainNavigator,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'SplashScreen'
})