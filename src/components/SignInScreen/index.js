import { getUserIsLoadingState, getUserErrorState } from '../../redux/selectors/entities/userSelectors';
import { connect } from 'react-redux';
import SignInScreen from './SignInScreen';
import { signInRequest } from '../../redux/actions/entities/authenticateActions';

function mapStateToProps (state) {
    return {
        isLoading: getUserIsLoadingState(state),
        error: getUserErrorState(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        signIn: (userName, password) => dispatch(signInRequest(userName, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
