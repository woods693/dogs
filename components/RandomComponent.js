import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DisplayImageComponent from './DisplayImageComponent';
import { RANDOM_DOG_API_URL } from '../constants/UrlConstants';
import { TouchableOpacity } from 'react-native';
import LoaderComponent from './LoaderComponent';

const RandomComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null)
  const getRandomDom = () => {
    setIsLoading(true)
    return fetch(RANDOM_DOG_API_URL)
      .then(response => response.json())
      .then(data => {
        setImage(data.message);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const showPicture = () => {
    if (!isLoading) {
      return (
        <TouchableOpacity onPress={() => getRandomDom()}>
          <DisplayImageComponent url={image}/>
        </TouchableOpacity>
      )
    }
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => getRandomDom()} style={styles.button}>
        <Text style={styles.buttonText}>GENERATE</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <LoaderComponent opacity={isLoading ? 1 : 0}/>
        {showPicture()}
      </View>
    </View>
  )
}

export default RandomComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 450,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f0f0f0'
  },
  button: {
    padding: 20,
    backgroundColor: '#fff', // Main background
    borderStyle: 'solid',
    borderWidth: 4,           // Outer border width
    borderColor: '#000',      // Main border color (black)
    position: 'relative',     // Needed for the pseudo-effect
    shadowColor: '#000',      // Shadow color
    shadowOffset: { width: 4, height: 4 }, // Offset shadow to the right and bottom
    shadowOpacity: 1,         // Opaque shadow
    shadowRadius: 0,          // No blur, sharp shadow
  },
  buttonText: {
    fontFamily: 'PressStart2P', // Use your custom font
    fontSize: 16,
    color: '#000',              // Text color
    textAlign: 'center',
  }
})