import { Icon } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    signOut: PropTypes.func.isRequired,
};

const HeaderRight = ({signOut}) => {
    return (
        <Icon name='power-settings-new' underlayColor='transparent' color='white' onPress={signOut}/>
    )
};

HeaderRight.propTypes = propTypes;

export default HeaderRight;
