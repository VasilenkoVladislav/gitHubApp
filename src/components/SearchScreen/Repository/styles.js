import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 10,
        padding: 10
    },
    repositoryName: {
        color: '#0366d6',
        fontSize: 16,
        fontWeight: '500'
    },
    repositoryDescription: {
        marginTop: 10
    },
    repositoryUpdated: {
        fontSize: 10,
        marginTop: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    repositoryLanguage: {
        fontSize: 10
    },
    repositoryStatisticsWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    repositoryWatchersCount: {
        fontSize: 10,
        marginHorizontal: 5
    },
    repositoryStarsCount: {
        fontSize: 10,
        marginHorizontal: 5
    },
    repositoryForksCount: {
        fontSize: 10,
        marginLeft: 5
    }
});
