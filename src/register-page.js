//create a simple register page

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../images/logoDriveMyCar.jpg')} />

            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchBarText}
                    placeholder="email"
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
                        onPress={() => addUser()}
                    >
                        <Text style={styles.bodyTopButtonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.bodyTopButton}
                        onPress={() => navigation.navigate('LoginPage')}
                    >
                        <Text style={styles.bodyTopButtonText}>Cancel</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 50,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '80%',
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
    },
    searchBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyTop: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyTopButton: {
        backgroundColor: '#000',
        width: '40%',
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    bodyTopButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default RegisterPage;