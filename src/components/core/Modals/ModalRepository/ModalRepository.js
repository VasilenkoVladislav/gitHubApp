import { View, WebView } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    modalInfo: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        data: PropTypes.object
    }).isRequired,
    hideModal: PropTypes.func.isRequired
};

const ModalRepository = ({modalInfo, hideModal}) => {
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
            <Icon type='material-community'
                  name='close-circle'
                  underlayColor='transparent'
                  color='grey'
                  size={35}
                  containerStyle={styles.closeIcon}
                  onPress={hideModal}/>
            <View style={styles.webWrap}>
                <WebView source={{uri: modalInfo.data.url}}/>
            </View>
        </Modal>
    )
};

ModalRepository.propTypes = propTypes;

export default ModalRepository;
