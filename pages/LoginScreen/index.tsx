import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { login, register } from '../../api';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
  setIsLoggedIn: (value: boolean) => void;
};

const LoginScreen: React.FC<Props> = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Alternar entre login e registro

  const handleRegister = async () => {
    try {
      await register(email, password);
      Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
      setIsLogin(true);
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro ao registrar');
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      setIsLoggedIn(true);
      navigation.replace('Home');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro ao fazer login');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{isLogin ? 'Login' : 'Registrar'}</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button
        title={isLogin ? 'Login' : 'Registrar'}
        onPress={isLogin ? handleLogin : handleRegister}
      />
      <Button
        title={`Ir para ${isLogin ? 'Registrar' : 'Login'}`}
        onPress={() => setIsLogin(!isLogin)}
      />
    </View>
  );
};

export default LoginScreen;
