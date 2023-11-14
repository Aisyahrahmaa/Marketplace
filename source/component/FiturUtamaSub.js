import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    imageFeatureUtama:{
        height:55,
        width:55,
        marginTop:15,
    },
    textFeutureUtama:{
        textAlign:'center',
        marginTop:4,
    }
})
const FiturUtamaSub = (props) => {
    return (
            <View style={{width:'25%' ,alignItems:'center'}}>
                <Image style={style.imageFeatureUtama} source={props.image} />
                <Text style={style.textFeutureUtama}>{props.title}</Text>
            </View>
    )
}
export default FiturUtamaSub
