import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';
import React from 'react';
// Lottie Animation
import LottieView from 'lottie-react-native';
// vactor Icons
import Icons from 'react-native-vector-icons/FontAwesome6'
// Responsive Screen
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// animation
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = ({ navigation }) => {
  const bgColor= useColorScheme()==="dark"

  return (
      <SafeAreaView style={[styles.container,{backgroundColor:bgColor?"gray":"white"}]}>

        <StatusBar  backgroundColor={bgColor?"gray":"white"} barStyle={bgColor?"light-content":"dark-content"}/>

        <View style={styles.view}>
          <Animatable.Text
          animation="fadeInDownBig" iterationCount={1} direction="alternate" duration={2000}
           style={[styles.text,{color:bgColor?'white':'black'}]}>JADOO
           </Animatable.Text>

          <Animatable.Text 
           animation="fadeInLeftBig" iterationCount={1} direction="alternate"
          style={[styles.text2,{color:bgColor?"white":"gray"}]}>The Future is here | powered by AI.</Animatable.Text>
        </View>

        <View style={styles.view2}>
          <LottieView
            style={{ flex: 1 }}
            source={require('../../assets/animation/robotA.json')}
            autoPlay
            loop
          />

        </View>
        <Animatable.View
         animation="fadeInUpBig" iterationCount={1} direction="alternate"
         duration={3000}
         style={styles.view}>

          <TouchableOpacity style={styles.touch}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text3}>Get Started <Icons name='arrow-right-long' size={18} /></Text>
          </TouchableOpacity>

        </Animatable.View>
      </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  view: {
    alignItems: 'center',
  },
  view2: {
    height: hp('50%'),
    width: wp('85%'),
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: wp('10%'),
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  text2: {
    color: 'gray',
    fontSize: wp('3.5%'),
    letterSpacing: 2,
  },
  text3: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
    alignItems: 'center'
  },
  touch: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8
  },
});
