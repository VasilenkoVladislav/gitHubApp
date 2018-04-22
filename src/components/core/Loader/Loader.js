import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={80} color='grey'/>
        </View>
    )
};

export default Loader;
