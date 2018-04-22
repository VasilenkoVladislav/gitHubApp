import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements'
import { View, Image, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { images } from '../../resources/images';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    error: PropTypes.object,
    signIn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

class SignInScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            userNameValid: true,
            passwordValid: true
        };
    }
    signInOnClick = () => {
        let userNameValid = false;
        let passwordValid = false;
        if (this.state.userName.length !== 0) {
            userNameValid = true;
        }
        if (this.state.password.length !==0) {
            passwordValid = true;
        }
        this.setState({ userNameValid, passwordValid });
        !userNameValid && this.userNameInput.shake();
        !passwordValid && this.passwordInput.shake();
        if (userNameValid && passwordValid) {
            this.props.signIn(this.state.userName, this.state.password);
            this.setState({ userName: '', password: '' });
        }
    };
    handleOnChangeTextUserName = (userName) => {
        this.setState({ userName });
    };
    handleOnChangeTextPassword = (password) => {
        this.setState({ password });
    };
    handleOnSubmitEditingUserName = () => {
        this.passwordInput.focus();
    };
    handleOnSubmitEditingPassword = () => {
        this.signInOnClick();
    };
    render () {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white"/>
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={images.gitHubLogo}/>
                    </View>
                    <View style={styles.formContainer}>
                        <Input
                            value={this.state.userName}
                            leftIcon={
                                <Icon
                                    type='feather'
                                    name='user'
                                    size={17}
                                    color='grey'/>
                            }
                            ref={input => this.userNameInput = input}
                            inputStyle={styles.input}
                            placeholderTextColor='grey'
                            leftIconContainerStyle={styles.leftIconInputContainer}
                            keyboardAppearance='light'
                            autoFocus={false}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType='next'
                            placeholder='Username or email address'
                            containerStyle={styles.inputContainerUserName}
                            onSubmitEditing={this.handleOnSubmitEditingUserName}
                            errorStyle={styles.errorInput}
                            onChangeText={this.handleOnChangeTextUserName}
                            errorMessage={!this.state.userNameValid ? 'Username can not be blank' : null}/>
                        <Input
                            value={this.state.password}
                            leftIcon={
                                <Icon
                                    type='feather'
                                    name='lock'
                                    size={17}
                                    color='grey'/>
                            }
                            ref={input => this.passwordInput = input}
                            inputStyle={styles.input}
                            placeholderTextColor='grey'
                            leftIconContainerStyle={styles.leftIconInputContainer}
                            keyboardAppearance='light'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            returnKeyType='done'
                            blurOnSubmit={true}
                            containerStyle={styles.inputContainerPassword}
                            placeholder='Password'
                            errorStyle={styles.errorInput}
                            onSubmitEditing={this.handleOnSubmitEditingPassword}
                            onChangeText={this.handleOnChangeTextPassword}
                            errorMessage={!this.state.passwordValid ? 'Password can not be blank' : null}/>
                        <Button
                            buttonStyle={styles.loginButton}
                            containerStyle={styles.loginButtonContainer}
                            activeOpacity={0.8}
                            title='Sign In'
                            onPress={this.signInOnClick}
                            loading={this.props.isLoading}
                            disabledStyle={{backgroundColor: '#98cca4'}}
                            disabled={this.props.isLoading}/>
                    </View>
                </View>
            </View>
        )
    }
}

SignInScreen.propTypes = propTypes;

export default SignInScreen;
