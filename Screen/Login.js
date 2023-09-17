import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,TouchableOpacity } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
    <Text style={styles.TextSignin}>Sign In</Text>
      <TextInput style={styles.TextInput}
        placeholder="Email or phone number"
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
      <TouchableOpacity style={styles.Buttonlogin}>
        <Text style={styles.buttonTextlo}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.Text}>OR</Text>
      <TouchableOpacity style={styles.Buttonsignup}>
        <Text style={styles.buttonTextsi}>Facebook Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    TextSignin:{
        fontSize: 30,
        textAlign: 'left', 
        marginBottom: 50,
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
        margin: 10,
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
    Text:{
        margin:40,
        alignSelf: 'center',
    },
    TextInput:{
        width: 300,
        margin: 10,
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },
});