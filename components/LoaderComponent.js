import { Animated, Easing, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'

const LoaderComponent = ({opacity}) => {
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
  
  return (
    <Animated.Image
      source={require('../assets/dog.png')}
      style={[styles.image, {transform: [{translateY: bounceValue}], opacity: opacity}]}
    />
  )
}

export default LoaderComponent

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
  }
})