import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TextInput, Button, Image } from 'react-native';
import { fetchPosts, createPost } from "../api/restApi"

export default function HomeScreen() {
  const [posts, setPosts] = useState([]); // untuk menyimpan data postingan yang akan diambil dari API.
  const [loading, setLoading] = useState(true); // untuk melacak status pemuatan data.
  const [error, setError] = useState(null); // untuk menyimpan data ketika error

  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const getPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    console.log(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = async () => {
    if (!title || !body) {
      Alert.alert('Validation Error', 'Title and Body cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      const newPost = await createPost({ title, body });
      Alert.alert('Success', `Post created with ID: ${newPost.id}`);
      setName('');
      setJob('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  } // kondisi ketika proses memuat response dari backend belum selesai

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  } // ketika mendapatkan response error backend

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
        />
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={job}
          onChangeText={setJob}
          placeholder="Enter job"
          multiline
        />
        <Button
          title={loading ? 'Submitting...' : 'Submit Post'}
          onPress={handleSubmit}
          disabled={loading}
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.title}>{item.first_name}</Text>
            <Image source={{ uri: item.avatar }}  style={{ width: 50, height: 50, borderRadius: 25 }}  />
          </View>
        )}
    />
     </SafeAreaView>
  ); // ketika mendapatkan response success
};
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
  container: {
    paddingBottom: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
});
