import React from 'react'
import { TextInput,View } from 'react-native'
import styles from './SearchBar.styles'

const SearchBar = (props) => {
    

    return(
        <View style={styles.container}>
        <TextInput 
        placeholder='Ara...'  onChangeText={props.Search}
        />
    </View>
    )

}


export default SearchBar;