import Modal from 'react-native-modal';
import React from 'react';
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { View } from 'react-native';

const propTypes = {
    modalInfo: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        data: PropTypes.object
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    currentSort: PropTypes.string.isRequired,
    currentOrder: PropTypes.string.isRequired,
    changeSort: PropTypes.func.isRequired,
    searchRepositories: PropTypes.func.isRequired,
};

const ModalSorts = ({modalInfo, hideModal, currentSort, currentOrder, changeSort, searchRepositories}) => {
    const handleChangeSort = (sort, order) => {
        changeSort(sort, order);
        hideModal();
        searchRepositories();
    };
    return (
        <Modal
            useNativeDriver={true}
            style={styles.container}
            animationIn='bounceInUp'
            animationOut='fadeOutDown'
            animationInTiming={1000}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            isVisible={modalInfo.isOpen}
            onBackButtonPress={hideModal}
            onBackdropPress={hideModal}>
            <View style={styles.sortsWrap}>
                <CheckBox
                    title='Best Match'
                    checked={currentSort === ''}
                    onPress={handleChangeSort.bind(this, '', 'desc')}/>
                <CheckBox
                    title='Most stars'
                    checked={currentSort === 'stars' && currentOrder === 'desc'}
                    onPress={handleChangeSort.bind(this, 'stars', 'desc')}/>
                <CheckBox
                    title='Fewest stars'
                    checked={currentSort === 'stars' && currentOrder === 'asc'}
                    onPress={handleChangeSort.bind(this, 'stars', 'asc')}/>
                <CheckBox
                    title='Most forks'
                    checked={currentSort === 'forks' && currentOrder === 'desc'}
                    onPress={handleChangeSort.bind(this, 'forks', 'desc')}/>
                <CheckBox
                    title='Fewest forks'
                    checked={currentSort === 'forks' && currentOrder === 'asc'}
                    onPress={handleChangeSort.bind(this, 'forks', 'asc')}/>
            </View>
        </Modal>
    )
};

ModalSorts.propTypes = propTypes;

export default ModalSorts;
