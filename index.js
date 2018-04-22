import { AppRegistry } from 'react-native';
import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import Loader from './src/components/core/Loader';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

const EntryPoint = () => (
    <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent('githubApp', () => EntryPoint);
