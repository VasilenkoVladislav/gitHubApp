import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { addListener } from '../../redux/utils/reactNavigation';
import AppNavigator from '../../router';
import { BackHandler, NetInfo } from 'react-native';
import { changeNetworkStatus } from '../../redux/actions/entities/authenticateActions';
import Modals from '../../components/core/Modals';
import { push } from '../../redux/actions/nav';
import PropTypes from 'prop-types';

const propTypes = {
    nav: PropTypes.object.isRequired,
    isSignIn: PropTypes.bool.isRequired,
};

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        NetInfo.isConnected.addEventListener('connectionChange', this.onConnectionChange);
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        const { isSignIn, dispatch } = this.props;
        NetInfo.getConnectionInfo().then(({type}) => {
            dispatch(changeNetworkStatus(type));
        });
        if (!isSignIn) {
            dispatch(push('Auth'));
        }
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.onConnectionChange);
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onConnectionChange = ({type}) => {
        const { dispatch } = this.props;
        dispatch(changeNetworkStatus(type));
    };
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (this.isRootScreen(nav)) return false;
        dispatch(NavigationActions.back());
        return true;
    };
    isRootScreen(navigator) {
        if (navigator.index == null) {
            return true;
        }
        if (navigator.index > 0) {
            return false;
        }
        return !navigator.routes || !navigator.routes.find(route => !this.isRootScreen(route));
    }
    render () {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({ dispatch, state: nav, addListener });
        return (
            <React.Fragment>
                <AppNavigator navigation={navigation}/>
                <Modals/>
            </React.Fragment>
        );
    }
}

App.propTypes = propTypes;

export default App;
