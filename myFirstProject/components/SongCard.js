
import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './songCard.style'

const SongCard = (props) =>{
   return(
    <View style={styles.container}> 
        <Image style={styles.image} source={{uri: props.song.imageUrl}} />
        <View style={styles.innerContainer}>
            <Text style={styles.title} >{props.song.title}</Text>
            <View style={styles.deneme}>
            <View style={styles.info_container}>
                <Text style={styles.artist} >{props.song.artist}</Text>
                <Text style={styles.year}>{props.song.year}</Text>
            </View>
            { props.song.isSoldOut === true ? (
            <View style={styles.soldout_container}>
                <Text style={styles.soldout}>
                    TÜKENDİ
                </Text> 
            </View>
            ) : null }
            </View>
        </View>
    </View>
   )
}


export default SongCard;