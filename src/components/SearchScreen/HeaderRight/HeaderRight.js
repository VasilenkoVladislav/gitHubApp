import { Icon } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    showModal: PropTypes.func.isRequired,
};

const HeaderRight = ({showModal}) => {
    const handleOnPress = () => {
        showModal('ModalSorts');
    };
    return (
        <Icon name='sort' underlayColor='transparent' color='white' onPress={handleOnPress}/>
    )
};

HeaderRight.propTypes = propTypes;

export default HeaderRight;
