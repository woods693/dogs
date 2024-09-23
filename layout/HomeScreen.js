import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RandomComponent from '../components/RandomComponent'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RandomComponent />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})