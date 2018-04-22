import AppNavigator from '../../../router';

export default (state, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}
