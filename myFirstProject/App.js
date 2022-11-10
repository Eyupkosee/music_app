import React,{useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './SearchBar/SearchBar';

const App = () => {

  const [List,setList] = useState(music_data)
  
  const returnItem = ({item}) => <SongCard song={item} />

  const onSearch = (text) => {
      const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) >-1;
    })

    setList(filteredList)
  }

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <SearchBar Search={onSearch}/>
    <FlatList
    keyExtractor={item => item.id}
    data={List}
    renderItem={returnItem}
    ItemSeparatorComponent = {<View style={styles.seperator}/>}
    />
    </View>
  </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
    flex:1,
    height:2,
    backgroundColor: '#e4e0e0'
  }
})

export default App;