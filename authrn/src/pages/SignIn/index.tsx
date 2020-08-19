import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import {signIn} from '../../services/auth';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
    },

});

const SignIn: React.FC = () => {
    async function handleSignIn() {
        const response = await signIn();
        console.log('Resposta: ', response);
    }
 
    return <View style={styles.container}>
        <Button title="Sign in" onPress={handleSignIn} />
    </View>;
};

export default SignIn;