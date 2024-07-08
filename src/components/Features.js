import { Image, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Features = () => {
  const bgCS = useColorScheme() === "dark"
  return (

    <View style={styles.view1}>
      <Animatable.Text animation="slideInUp" iterationCount={1} direction="alternate"
       duration={2000}
        style={[styles.text, { color: bgCS ? 'white' : 'black' }]}>
        Features
      </Animatable.Text>

      {/* 01 */}
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Animatable.Text
          animation="slideInDown" iterationCount={1} direction="alternate"
          duration={1000}
            style={[
              { fontSize: wp(6), fontWeight: 'bold', color: bgCS ? "white" : "black" },
              styles.hello,
            ]}>
            Hello, User
          </Animatable.Text>

          <Animatable.Text 
          animation="bounceInLeft" iterationCount={1} direction="alternate"
          duration={2000}
          style={{ fontSize: wp(6), fontWeight: 'bold', color: bgCS ? "white" : "gray", }}>
            How can I help you today?
          </Animatable.Text>
        </View>
      </View>

      {/* 02 */}
      <View style={[styles.view2, { backgroundColor: 'black',overflow:'hidden' }]}>
        <View style={styles.view3}>
          <Image
            source={require('../../assets/images/geee.png')}
            style={[{ height: hp(8), width: wp(40), borderRadius: 8 }]}
          />
        </View>
        <Animatable.Text
        animation="slideInUp" iterationCount={1} direction="alternate"
        duration={2000}
         numberOfLines={7} style={styles.text2}>
          I'm Gemini, the best way to directly access Google AI. I'm trained on
          large amounts of publicly available data and I can communicate and
          generate human-like text in response to a wide range of questions. Let
          me know if you'd like to learn more, or just try me out and see what I
          can do for you.
        </Animatable.Text>
      </View>

      {/* 03 */}
      <View style={styles.hrView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.box, styles.box1]}>
            <Text numberOfLines={5} style={[styles.boxText, { color: bgCS ? "gray" : "gray" }]}>
              Act like Mowgli from The Jungle Book. Answer this question?
            </Text>
            <Icons style={[styles.icon, { backgroundColor: bgCS ? "orange" : "gray" }]} name='lightbulb-outline' size={20} color="white" />
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text numberOfLines={5} style={[styles.boxText, { color: bgCS ? "gray" : "gray" }]}>
              Help me find YouTube videos to care for a specific plant.
            </Text>
            <Icons style={styles.icon} name='youtube' size={20} color="white" />
          </View>
          <View style={[styles.box, styles.box3]}>
            <Text numberOfLines={5} style={[styles.boxText, { color: bgCS ? "gray" : "gray" }]}>
              create React Native app using Expo tailwindCss and others framworks
            </Text>
            <Icons style={[styles.icon, { backgroundColor: 'green' }]} name='history' size={20} color="white" />
          </View>
          <View style={[styles.box, styles.box4]}>
            <Text numberOfLines={5} style={[styles.boxText, { color: bgCS ? "gray" : "gray" }]}>
              AI boosts efficiency, analyzes data, and improves decisions.
            </Text>
            <Icons style={[styles.icon, { backgroundColor: 'steelblue' }]} name='lightning-bolt' size={20} color="white" />
          </View>
        </ScrollView>
      </View>
    </View>

  );
};

export default Features;

const styles = StyleSheet.create({

  view1: {
    height: hp(70),
  },
  view2: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
  view3: {
    flexDirection: 'column',
    gap: 10,
  },
  hrView: {
    paddingVertical: 5,
    marginVertical: 15,
  },
  text: {
    fontSize: wp(7),
    letterSpacing: 2,
    fontWeight: '600',
    color: 'black',
  },
  text2: {
    fontSize: wp(4.1),
    fontWeight: '300',
    color: 'white',
    paddingHorizontal: 2,
    paddingVertical: 5,
    lineHeight: 28,
  },
  // Boxs

  box: {
    height: hp(15),
    width: wp(30),
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden'
  },
  boxText: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  icon: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: 'red',
    borderTopLeftRadius: 20
  }
});
