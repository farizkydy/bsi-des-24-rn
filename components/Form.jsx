import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function FormComponent({state}) {
  console.log('state nya adalah: ', state);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [notes, setNotes] = useState('')

  // const handlePasswordChar = (char) => {
  //   const newChar = char[char.length - 1] || ''
  //   setMaskPassword((prev) => (char.length > prev.length ? prev + newChar : prev.slice))
  //   setPassword('*'.repeat(char.length))
  // }
  return (
    <SafeAreaView>
      {state === 'register' &&
       <TextInput
       style={styles.input}
       placeholder='Enter your name'
       value={name}
       onChangeText={(text) => setName(text)}
       />
      }
     
      <TextInput
      style={styles.input}
      placeholder='Enter your email address'
      value={email}
      onChangeText={(text) => setEmail(text)}
      autoCorrect={false}
      autoCapitalize='none'
      ></TextInput>
        <TextInput
      style={styles.input}
      placeholder='Enter your password address'
      value={password}
      onChangeText={setPassword}
      autoCorrect={false}
      autoCapitalize='none'
      secureTextEntry
      ></TextInput>
       <TextInput
      style={styles.input}
      placeholder='Enter your phone number'
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      autoCorrect={false}
      inputMode='numeric'
      autoCapitalize='none'
      ></TextInput>
      <TextInput
      style={[styles.input]}
        placeholder='Notes'
        value={notes}
        multiline={true}
        numberOfLines={4}
        onChangeText={setNotes}
      ></TextInput>

      {state === 'login' ?
        <Button title='Login' onPress={() => console.log('login')}></Button>
        :
        <Button title='Register' onPress={() => console.log('register')}></Button>
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10
  },
  notesInput: {
    height: 200
  }
});