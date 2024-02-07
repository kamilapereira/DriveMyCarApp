import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../images/logoDriveMyCar.jpg')} />

            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchBarText}
                    placeholder="username"
                    placeholderTextColor="#000"
                />
            </View>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchBarText}
                    placeholder="password"
                    placeholderTextColor="#000"
                />
            </View>

            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.bodyTopButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('RegisterPage')}
                    >
                        <Text style={styles.bodyTopButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: 'auto',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        marginTop: 80,
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginRight: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80,
        marginLeft: 100,
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 10,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    searchBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
    },
    bodyTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    bodyTopButton: {
        height: 80,
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTopButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    bodyBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    bodyBottomButton: {
        height: 150,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyBottomButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default LoginPage;
