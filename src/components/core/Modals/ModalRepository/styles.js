import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        margin: 0
    },
    webWrap: {
        height: SCREEN_HEIGHT - 60,
        width: SCREEN_WIDTH - 40
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        top: 0,
        zIndex: 1
    }
});
