import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    wrapperPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ovoFeautureImage: {
        height: 45,
        width: 40,
        marginTop: 17,
        marginHorizontal: 30,
    }
})
const OvoComponent = () => {
    return (
        <View style={style.wrapperPay}>
            <View>
                <Image style={style.ovoFeautureImage} source={require('../assets/icon/pay.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Pay</Text>
            </View>

            <View>
                <Image style={style.ovoFeautureImage} source={require('../assets/icon/topup.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Pay</Text>
            </View>

            <View>
                <Image style={style.ovoFeautureImage} source={require('../assets/icon/reward.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Pay</Text>
            </View>
        </View>
    )
}
export default OvoComponent
