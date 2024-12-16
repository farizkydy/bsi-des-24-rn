import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView } from 'react-native';
import Box from './components/Box';
import FormComponent from './components/Form';
import Register from './screens/Register';
import LoginScreen from './screens/Login';

export default function App() {
  return (
    <SafeAreaView>
      <LoginScreen></LoginScreen>
      <Register></Register>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
