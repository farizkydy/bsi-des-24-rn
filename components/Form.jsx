import { StyleSheet, SafeAreaView, TextInput, Button, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { login } from '../api/restApi';
import { useAuth } from '../context/AuthContext';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login: setLoginState } = useAuth();

  const handleSubmit = () => {
    if (!email || !password) {
      alert('Validation Error', 'Email and Password are required');
      return;
    }
    handleLogin(email, password);
  };

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setLoginState(token);
      alert('Success', 'Login successful');
    } catch (error) {
      alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
