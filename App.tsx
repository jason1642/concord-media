import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const HomeScreen = () => {

  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>This is the home screen</Text>
  </View>)
}


const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/get-all-users').then(res => {
      console.log(res.data)
    }, err => {
      console.log(err)
    })
  }, []);
  return (
    <NavigationContainer>

     
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
</NavigationContainer>
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
