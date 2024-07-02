// pages/LoginScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '890732176134-rqm1jtbp02mu9npkqsg9k8g9p4hi1nft.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((result) => {
          console.log('Login successful', result);
        })
        .catch((error) => {
          console.log('Login error', error);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot</Text>
      <Text style={styles.description}>Descrição do APP para criar imagens</Text>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => {
          promptAsync();
        }}
        disabled={!request}
      >
        <Image
          source={require('../../assets/google-icon.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default LoginScreen;
