import { connect } from 'react-redux';
import HeaderRight from './HeaderRight';
import { showModal } from '../../../redux/actions/ui/modalsActions';

function mapDispatchToProps (dispatch) {
    return {
        showModal: (type, data) => dispatch(showModal(type, data)),
    }
}

export default connect(null, mapDispatchToProps)(HeaderRight);
