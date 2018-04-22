import { connect } from 'react-redux';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelectors';
import ModalRepository from './ModalRepository';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalRepository')
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        hideModal: () => dispatch(hideModal('ModalRepository'))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalRepository);
