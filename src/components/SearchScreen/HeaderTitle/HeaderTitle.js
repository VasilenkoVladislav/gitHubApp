import { View, TextInput } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    value: PropTypes.string.isRequired,
    changeSearchValue:  PropTypes.func.isRequired,
    searchRepositories: PropTypes.func.isRequired
};

const HeaderTitle = ({value, changeSearchValue, searchRepositories}) => {
    const onChangeText = (value) => {
        changeSearchValue(value);
        searchRepositories();
    };
    return (
        <View style={styles.container}>
            <TextInput value={value}
                       maxLength={30}
                       underlineColorAndroid='white'
                       placeholderTextColor='grey'
                       style={styles.textInput}
                       onChangeText={onChangeText}
                       placeholder='Search'/>
        </View>
    )
};

HeaderTitle.propTypes = propTypes;

export default HeaderTitle;
