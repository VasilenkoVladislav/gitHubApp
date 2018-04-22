import { getSearchRepositoriesState, getSearchIsLoadingState } from '../../redux/selectors/entities/searchSelectors';
import { connect } from 'react-redux';
import { getUserNetWorkStatusState } from '../../redux/selectors/entities/userSelectors';
import SearchScreen from './SearchScreen';
import { searchNextRepositoriesRequest } from '../../redux/actions/entities/searchActions';
import { showModal } from '../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        netWorkStatus: getUserNetWorkStatusState(state),
        searchRepositories: getSearchRepositoriesState(state),
        isLoading: getSearchIsLoadingState(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        showModal: (type, data) => dispatch(showModal(type, data)),
        searchNextRepositories: (data) => dispatch(searchNextRepositoriesRequest(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
