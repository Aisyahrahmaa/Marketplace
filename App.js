import React,{Component} from 'react'
import { View, Text, Image, Dimensions, StyleSheet, StatusBar} from 'react-native'
import imgBanner from './source/assets/images/awan.jpg'
import OvoComponent from './source/component/OvoComponent'

const {height, width} = Dimensions.get('window')
const style = StyleSheet.create({
  imageBanner:{
    height:150, width:width,
  },
  greetingText:{
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'

  },

  wrapperOvo:{
    marginHorizontal:18,
    height: 140,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
  },

  textOvo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },

  garisDiOvo:{
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },

})

class Home extends Component{
  render (){
    return (
      <View style={{flex:1 ,backgroundColor:'white'}}>
        <StatusBar barStyle="dark-content" translucent backgroundColor={"rgba(0,0,0,0)"}/>
        <Image style={style.imageBanner} source={imgBanner} />
        <Text style={style.greetingText}>Selamat Siang</Text>
        <View style={style.wrapperOvo}>
          <View style={style.textOvo}> 
            <Text style={{fontSize:17, fontWeight:'bold', color:'#383838'}}>Ovo Balence</Text>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#383838'}}>Rp.1.000.000</Text>
          </View>
          <View style={style.garisDiOvo}></View>
          <OvoComponent />
        </View>
      </View>
    )
  }
}

export default Home