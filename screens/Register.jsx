import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import FormComponent from '../components/Form';
export default function Register() {
  return (
    <View >
      <Text>Ini Register</Text>
      <FormComponent state='register'></FormComponent>
    </View>
  )
}