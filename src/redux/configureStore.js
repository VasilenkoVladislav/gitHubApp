import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import { reactNavigationMiddleware } from './utils/reactNavigation';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { persistStore } from 'redux-persist';

let persistor;
let store ;

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
    const middleware = [sagaMiddleware, reactNavigationMiddleware];
    if (__DEV__) {
        middleware.push(logger);
        store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
    } else {
        store = createStore(rootReducer, applyMiddleware(...middleware));
    }
    persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}

export function getPersistor() {
    return persistor;
}

