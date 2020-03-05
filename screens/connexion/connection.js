import React, { Component } from 'react';
import { StyleSheet, View, Image, 
	KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import ConnectionForm from './connectionform'

/* CONNECTION */
function Connection( props ) {

	const toSignIn = () => {
		props.navigation.navigate( 'SignIn' );
	}
	
	const toSignUp = () => {
		props.navigation.navigate( 'SignUp' );
	}


    return (
        <ScrollView >
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <TouchableOpacity style={styles.logoContainer}
				        	onPress={ ()=>{ props.navigation.navigate('Mes Mariages') } }>
				           <Image 
						         style={styles.logo}
						         source={require('../../assets/logo1.png')}
						         
				           />
				        </TouchableOpacity>

                <View>
                    <ConnectionForm toSignIn={toSignIn} toSignUp={toSignUp}/>
                </View>
                
            </KeyboardAvoidingView>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F8FB'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        marginTop: 50,
        width: 250,
        height: 200,
    },
})

export default Connection
