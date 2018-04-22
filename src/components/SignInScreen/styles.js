import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        backgroundColor: 'white'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150
    },
    formContainer: {
        flex: 2,
        alignItems:'center',
    },
    input: {
        color: 'grey',
        padding: 0
    },
    errorInput: {
        position: 'absolute',
        margin: 0,
        top: 40
    },
    leftIconInputContainer: {
        marginLeft: 0
    },
    inputContainerUserName: {
        width: SCREEN_WIDTH - 70,
    },
    inputContainerPassword: {
        marginTop: 20,
        width: SCREEN_WIDTH - 70,
    },
    loginButtonContainer: {
        marginVertical: 30,
        width: SCREEN_WIDTH - 70,
    },
    loginButton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        height: 40,
    }
});
