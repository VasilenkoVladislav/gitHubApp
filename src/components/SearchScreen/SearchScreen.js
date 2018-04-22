import { FlatList, NetInfo, View, Text } from 'react-native';
import React, { PureComponent } from 'react';
import HeaderRight from './HeaderRight';
import HeaderTitle from './HeaderTitle';
import { Icon } from 'react-native-elements'
import Repository from './Repository';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    netWorkStatus: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchRepositories: PropTypes.array.isRequired,
    showModal: PropTypes.func.isRequired,
    searchNextRepositories: PropTypes.func.isRequired
};

const SearchScreen = ({searchRepositories, isLoading, searchNextRepositories, showModal, netWorkStatus}) => {
    const renderItem = ({item}) => {
        return <Repository repository={item} showModal={showModal} netWorkStatus={netWorkStatus}/>;
    };
    return (
        <React.Fragment>
            {!(netWorkStatus === 'none' && searchRepositories.length === 0)
                ? <FlatList data={searchRepositories}
                        keyExtractor={item => item.id.toString()}
                        refreshing={isLoading}
                        onRefresh={() => {}}
                        onEndReached={searchNextRepositories}
                        initialNumToRender={15}
                        progressViewOffset={40}
                        renderItem={renderItem} />
                : <View style={styles.offlineBlock}>
                    <Icon name='signal-wifi-off' color='grey' size={30}/>
                    <Text style={styles.offlineText}>Offline</Text>
                </View> }
        </React.Fragment>
    )
};

SearchScreen.navigationOptions = ({navigation}) => {
    return {
        headerStyle: styles.header,
        headerTitle: <HeaderTitle/>,
        headerLeft: <Icon name='arrow-back' underlayColor='transparent' color='white' onPress={() => navigation.goBack()}/>,
        headerRight: <HeaderRight/>,
    }
};

SearchScreen.propTypes = propTypes;

export default SearchScreen;
