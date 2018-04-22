import { getCurrentSortState, getCurrentOrderState } from '../../../../redux/selectors/ui/searchScreenSelectors';
import { changeSort } from '../../../../redux/actions/ui/searchScreenActions';
import { connect } from 'react-redux';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelectors';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';
import ModalSorts from './ModalSorts';
import { searchRepositoriesRequest } from '../../../../redux/actions/entities/searchActions';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalSorts'),
        currentSort: getCurrentSortState(state),
        currentOrder: getCurrentOrderState(state)
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        hideModal: () => dispatch(hideModal('ModalSorts')),
        changeSort: (sort, order) => dispatch(changeSort(sort, order)),
        searchRepositories: () => dispatch(searchRepositoriesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalSorts);
