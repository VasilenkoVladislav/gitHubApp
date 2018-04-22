import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingHorizontal: 10,
        backgroundColor: '#224365'
    },
    titleHeader: {
        flex:1,
        textAlign:'center',
        alignSelf:'center'
    },
    profileInfoWrap: {
        height: 220,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    userInfoWrap: {
        flex: 1,
        flexDirection: 'row'
    },
    avatarContainer: {
        marginRight: 10
    },
    userInfoName: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    },
    userInfoLogin: {
        fontSize: 12,
        color: 'white'
    },
    userStatisticsWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    userWork: {
        color: 'grey'
    },
    divider: {
        width: 1,
        height: 20,
        backgroundColor: 'grey'
    },
    userCountsWrap: {
        width: SCREEN_WIDTH - 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    userCountBlock: {
        alignItems: 'center'
    },
    userCountText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    userStatisticText: {
        fontSize: 12,
        color: 'grey'
    }
});
