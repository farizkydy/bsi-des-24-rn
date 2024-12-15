import { StyleSheet, SafeAreaView, TextInput, Button, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Form from '../components/Form';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({route}) {
  const navigation = useNavigation();
  return (
      <View>
        {/* <Form></Form> */}
        <Button title="Go to Login" onPress={() => navigation.goBack()} />
          <Text>data dari route sebelumnya: </Text>
      </View>
  );
}
