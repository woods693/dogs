import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DisplayImageComponent = ({url}) => {
  return (
    <View>
      <Image 
        source={{uri: url}}
        style={styles.image}
      />
    </View>
  )
}

export default DisplayImageComponent

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },
})