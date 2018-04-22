import App from './App';
import { connect } from 'react-redux';
import { getUserIsSignInState } from '../../redux/selectors/entities/userSelectors';
import { getNavState } from '../../redux/selectors/nav';

function mapStateToProps (state) {
    return {
        isSignIn: getUserIsSignInState(state),
        nav: getNavState(state)
    }
}

export default connect(mapStateToProps)(App);
