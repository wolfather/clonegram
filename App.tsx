import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Posts } from './src/components/Post';
import { Providers } from './src/providers';

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Clonegram</Text>
        <Posts />
      </View>
    </Providers>
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
