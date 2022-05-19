import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
export default function App() {
  useEffect(() => {
    axios.post('http://localhost:3000/create-user').then(res => {
      console.log(res.data)
    }, err => {
      console.log(err)
    })
  }, []);
  return (
    <View style={styles.container}>
      <Text>Welcome!!ß</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
