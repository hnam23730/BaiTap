import React from 'react';
import { afeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Landing = ( ) => {
    const navigation = useNavigation();
    const Login = () => {
        navigation.navigate('Login');
      };
    const SignUp = () => {
        navigation.navigate('SignUp');
      };
    const imageUrl = 'https://lcdn-hk.icons8.com/c/ErFl0Lz4WUCfKRqNeETY8Q/38d805f279854e5445a8beed007936b1b0d4ac4e.png';
  return (
    <View style={styles.container}>
    <Image
        source={{ uri: imageUrl }}
        style={[styles.logo, { tintColor: 'green' }]}
    />
      <Text style={styles.TitleStyle}>Welcome to My App</Text>
      <Text style={styles.TextStyle}>Order food and make reservations with one click.</Text>
      <TouchableOpacity
        style={styles.Buttonlogin}
        onPress={Login}
      >
        <Text style={styles.buttonTextlo}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Buttonsignup}
        onPress={SignUp}
      >
        <Text style={styles.buttonTextsi}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    Buttonlogin: {
        width: 300,
        margin: 10,
        backgroundColor: 'green', 
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    Buttonsignup: {
        width: 300,
        margin: 10,
        backgroundColor: 'white', 
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonTextlo: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonTextsi: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        height: 100, 
        marginBottom: 20,
    },
    TextStyle: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      paddingVertical: 20,
    },
    TitleStyle: {
      fontSize: 25,
      color: 'green',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
  });