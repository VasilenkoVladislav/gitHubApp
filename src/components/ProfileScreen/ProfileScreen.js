import { View, Text, StatusBar } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import HeaderRight from './HeaderRight';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    currentUserInfo: PropTypes.object.isRequired,
};

const ProfileScreen = ({currentUserInfo}) => {
    return (
        <View style={styles.container}>
            <StatusBar  backgroundColor="#224365"/>
            <LinearGradient colors={['#224365', '#0a1b30']} style={styles.profileInfoWrap}>
                <View style={styles.userInfoWrap}>
                    <Avatar large
                            rounded
                            containerStyle={styles.avatarContainer}
                            source={{uri: currentUserInfo.avatar_url}}
                            activeOpacity={0.7}/>
                    <View>
                        <Text style={styles.userInfoName}>{currentUserInfo.name || currentUserInfo.login}</Text>
                        <Text style={styles.userInfoLogin}>{currentUserInfo.login || currentUserInfo.name}</Text>
                    </View>
                </View>
                <View style={styles.userStatisticsWrap}>
                    <Text style={styles.userWork}>{currentUserInfo.bio}</Text>
                    <View style={styles.userCountsWrap}>
                        <View style={styles.userCountBlock}>
                            <Text style={styles.userCountText}>{currentUserInfo.followers}</Text>
                            <Text style={styles.userStatisticText}>Followers</Text>
                        </View>
                        <View style={styles.divider}/>
                        <View style={styles.userCountBlock}>
                            <Text style={styles.userCountText}>{currentUserInfo.public_repos}</Text>
                            <Text style={styles.userStatisticText}>Public repos</Text>
                        </View>
                        <View style={styles.divider}/>
                        <View style={styles.userCountBlock}>
                            <Text style={styles.userCountText}>{currentUserInfo.following}</Text>
                            <Text style={styles.userStatisticText}>Following</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View>
                <Text>Popular Repository Need Todo</Text>
            </View>
        </View>
    );
};

ProfileScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'GitHub',
        headerTitleStyle: styles.titleHeader,
        headerStyle: styles.header,
        headerTintColor: 'white',
        headerLeft: <Icon name='search' underlayColor='transparent' color='white' onPress={() => navigation.navigate('Search')}/>,
        headerRight: <HeaderRight/>
    }
};

ProfileScreen.propTypes = propTypes;

export default ProfileScreen;
