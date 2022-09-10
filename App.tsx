import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Posts } from './src/components/Post';
import { Providers } from './src/providers';
import { Profile } from './src/screens/Profile';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator()
//const Stack = createNativeStackNavigator();
// <Stack.Navigator initialRouteName='posts'>
//   <Stack.Screen name='posts' component={Posts} />
//   <Stack.Screen name='user' component={User} />
// </Stack.Navigator>

export default function App() {
  return (<>
    <Providers>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName='posts'>
          <Tab.Screen name='posts' component={Posts} />
          <Tab.Screen name='profile' component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Providers>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
