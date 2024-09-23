import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RandomComponent from './components/RandomComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './layout/HomeScreen';
import ListScreen from './layout/ListScreen';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function App() {
  const Tab = createBottomTabNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
    });
    setFontsLoaded(true);
  }
useEffect(() => {
  loadFonts();
},[])

  return (
    <NavigationContainer>
      { fontsLoaded && 
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="List" component={ListScreen} />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
