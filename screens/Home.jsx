import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import { fetchPosts } from "../api/restApi"

export default function HomeScreen() {
  const [posts, setPosts] = useState([]); // untuk menyimpan data postingan yang akan diambil dari API.
  const [loading, setLoading] = useState(true); // untuk melacak status pemuatan data.
  const [error, setError] = useState(null); // untuk menyimpan data ketika error

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

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
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Text style={styles.title}>{item.first_name}</Text>
          <Text style={styles.body}>{item.last_name}</Text>
          <Image
            source={{uri: item.avatar}}
            style={{ width: 200, height: 200}}
          ></Image>
        </View>
      )}
    />
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
});
