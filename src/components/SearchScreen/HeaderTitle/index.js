import { connect } from 'react-redux';
import { changeSearchValue } from '../../../redux/actions/ui/searchScreenActions';
import { getSearchValueState } from '../../../redux/selectors/ui/searchScreenSelectors';
import HeaderTitle from './HeaderTitle';
import { searchRepositoriesRequest } from '../../../redux/actions/entities/searchActions';

function mapStateToProps (state) {
    return {
        value: getSearchValueState(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        changeSearchValue: (value) => dispatch(changeSearchValue(value)),
        searchRepositories: () => dispatch(searchRepositoriesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);
