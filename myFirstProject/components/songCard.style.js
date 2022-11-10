import {StyleSheet} from 'react-native'

const styles= StyleSheet.create({
    container:{
        padding:9,
        flexDirection: 'row',
    },
    image :{
        width:90,
        height:90,
        borderRadius:45,
    },
    innerContainer:{
        flex:1,
        padding:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        color: 'black',
    },
    info_container:{
        flex:1,
        flexDirection: 'row',
        
    },
    deneme:{
        flexDirection: 'row',
    },soldout_container:{
        
        borderColor: 'red',
        borderWidth: 1,
        padding:5,
        borderRadius: 5,
    },
    soldout:{
        color: 'red',
    },
    year:{
        fontSize: 12,
        marginLeft:10,
        color: 'gray',
        fontWeight: 'bold',
        marginTop:2,
    }
    
})

export default styles;