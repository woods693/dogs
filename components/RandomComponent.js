import { Animated, Button, Easing, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DisplayImageComponent from './DisplayImageComponent';
import { RANDOM_DOG_API_URL } from '../constants/UrlConstants';
import { TouchableOpacity } from 'react-native';

const RandomComponent = () => {
  // loader
  const bounceValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -20,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounceValue]);

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null)
  const opacity = isLoading ? 1 : 0;
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
      <Button title='GENERATE' onPress={() => {getRandomDom()}}/>
      <View style={styles.imageContainer}>
        <Animated.Image
            source={require('../assets/dog.png')}
            style={[styles.image, {transform: [{translateY: bounceValue}], opacity: opacity}]}
        />
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
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
  }
})