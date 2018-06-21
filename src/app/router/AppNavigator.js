import {StackNavigator} from 'react-navigation';
import SplashScreen from '../component/splash/SplashScreen'
import {MainNavigator} from './MainNavigator'
import Login from "../component/login/Login";
import SignUp from "../component/signup/SignUp";
import ItemDetail from "../component/home/ItemDetail";

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
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    ItemDetail: {
        screen: ItemDetail,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'SplashScreen',
})