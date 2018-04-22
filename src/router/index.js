import { StackNavigator, SwitchNavigator } from 'react-navigation'
import React from 'react';
import ProfileScreen  from '../components/ProfileScreen';
import SearchScreen from '../components/SearchScreen';
import SignInScreen from '../components/SignInScreen';

const AppStack = StackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Search: {
        screen: SearchScreen
    }
});

const AuthStack  = StackNavigator({
    Login: {
        screen: SignInScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
});

export default SwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    }
);
