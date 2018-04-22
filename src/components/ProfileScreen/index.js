import { connect } from 'react-redux';
import { getCurrentUserInfoState } from '../../redux/selectors/entities/userSelectors';
import ProfileScreen from './ProfileScreen';

function mapStateToProps (state) {
    return {
        currentUserInfo: getCurrentUserInfoState(state)
    }
}

export default connect(mapStateToProps)(ProfileScreen);
