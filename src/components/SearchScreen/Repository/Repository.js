import { TouchableOpacity, Text, View } from 'react-native';
import moment from 'moment';
import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    netWorkStatus: PropTypes.string.isRequired,
    repository: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired
};

const Repository = ({repository, showModal, netWorkStatus}) => {
    const handleOnPress = () => {
        if (netWorkStatus !== 'none') {
            showModal('ModalRepository', { url:repository.html_url });
        }
    };
    const checkFormatText = (string) => {
        return string && string.length > 30 ? `${string.slice(0, 30)}...` : string;
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <View>
                <Text style={styles.repositoryName}>{checkFormatText(repository.name)}</Text>
                <Text style={styles.repositoryDescription}>{checkFormatText(repository.description)}</Text>
                <Text style={styles.repositoryUpdated}>Updated {moment(repository.updated_at).fromNow()}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.repositoryLanguage}>{repository.language}</Text>
                <View style={styles.repositoryStatisticsWrap}>
                    <Icon type='material-community' name='eye' size={18} color='grey'/>
                    <Text style={styles.repositoryWatchersCount}>{repository.watchers_count}</Text>
                    <Icon type='material-community' name='star' size={18} color='grey'/>
                    <Text style={styles.repositoryStarsCount}>{repository.stargazers_count}</Text>
                    <Icon type='material-community' name='source-branch' size={18} color='grey'/>
                    <Text style={styles.repositoryForksCount}>{repository.forks}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

Repository.propTypes = propTypes;

export default Repository;
