import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import AuthContext from '../../contexts/auth';


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
    },

});

const SignIn: React.FC = () => {
    const {signed, signIn, user} = useContext(AuthContext);
    console.log('signed :>> ', signed);
    console.log('user :>> ', user);

    async function handleSignIn() {
        console.log('SignIn', user);
        const resp = await signIn();
    }
 
    return <View style={styles.container}>
        <Button title="Sign in" onPress={handleSignIn} />
    </View>;
};

export default SignIn;