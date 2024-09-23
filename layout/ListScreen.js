import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DisplayListComponent from '../components/DisplayListComponent'

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <DisplayListComponent />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})