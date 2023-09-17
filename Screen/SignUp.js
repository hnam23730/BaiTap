import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,TouchableOpacity } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextSignin}>Create new account</Text>
      <TextInput style={styles.TextInput}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={styles.TextInput}
        placeholder="Phone Number"
        value={number}
        onChangeText={setNumber}
        secureTextEntry
      />
      <TextInput style={styles.TextInput}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput style={styles.TextInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Buttonsignup}>
        <Text style={styles.buttonTextsi}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    TextSignin:{
        fontSize: 30,
        textAlign: 'left', 
        marginBottom: 70,
        marginLeft: 20, 
        color: 'green',
    },
    Buttonlogin: {
        width: 300,
        margin: 10,
        backgroundColor: 'green', 
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    Buttonsignup: {
        width: 300,
        margin: 50,
        backgroundColor: 'darkblue', 
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },
    buttonTextlo: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonTextsi: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    TextInput:{
        width: 300,
        margin: 20,
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },
});