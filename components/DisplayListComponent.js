import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LIST_ALL_BREEDS_API_URL } from '../constants/UrlConstants'
import LoaderComponent from './LoaderComponent'
import { TouchableHighlight } from 'react-native'
import { Button } from 'react-native-web'

const DisplayListComponent = () => {
  const onClick = (breed) => {
    console.log(breed)
    
  }
  const [doglist, setList] = useState([])
  const [loading, setLoading] =  useState(true);
  const getBreedList = () => {
    return fetch(LIST_ALL_BREEDS_API_URL)
      .then(result => result.json())
      .then(json => {
        setList(Object.keys(json.message).map(key => ({key, value: json.message[key]})))
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getBreedList();
  }, [])

  const renderList = ({item}) => (
      <View style={styles.listButton}>
        <TouchableHighlight onPress={() => onClick(item)} underlayColor="#DDDDDD" style={styles.listContainer}>
          <Text style={styles.text}>{item.key}</Text>
        </TouchableHighlight>
        {item.value.length > 0 && <FlatList 
          data={item.value}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => onClick(item)} underlayColor="#DDDDDD" style={styles.listContainer}>
              <Text style={styles.text}>{item}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index.toString()}
        />}
      </View>
  )

  return (
    <View style={styles.container}>
        <LoaderComponent opacity={loading ? 1 : 0} />
        { !loading ? (<FlatList 
          data={doglist}
          renderItem={renderList}
          keyExtractor={item => item.key}
        />) : null }
    </View>
  )
}

export default DisplayListComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex:1,
    margin: 20,
    width: 600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    width: 600,
    alignItems: 'center',
    justifyContent: 'center'

  },
  listButton: {
    
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  }
})