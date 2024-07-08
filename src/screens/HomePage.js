import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
// Responsive Screen
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// Voice
import Voice from '@react-native-voice/voice';
// Button Sound
import Sound from 'react-native-sound';

import * as Animatable from 'react-native-animatable';

import { Context } from '../contextApi/contextApi';

const HomePage = () => {

  const { messages,
    setMessages,
    recording,
    setRecording,
    speaking,
    setSpeaking,
    onSent, } = useContext(Context)

  const clear = () => {
    setMessages([]);
    setRecording(false);
    setSpeaking(false);
  };

  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-US');
      setSpeaking(true);
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = () => {
    Voice.stop();
    setSpeaking(false);
    setRecording(false);
  };

  const speechStartHandler = e => {
    // console.warn('Speech Start Handler');
  };
  const speechEndHandler = e => {
    setRecording(false);
    setSpeaking(false);
    // console.warn('Speech End Handler');
  };
  const speechResultsHandler = e => {
    // console.warn('Speech Result:', e);
    const text = e.value[0];
    onSent(text);
  };

  const speechErrorHandler = e => {
    // console.log('Speech Error:', e);
    Alert.alert('Speech Error:', e)
  };

  // voice
  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;
  }, []);

  // Sound
  const playSound = () => {
    var sound = new Sound('huh.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
        sound.getDuration() +
        'number of channels: ' +
        sound.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  const bgColor= useColorScheme()==='dark'

  return (
    <View style={[styles.container,{backgroundColor:bgColor?"gray":'white'}]}>
      <StatusBar  backgroundColor={bgColor?"gray":"white"} barStyle={bgColor?"light-content":"dark-content"}/>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={styles.view1}>
          <LottieView
            style={{ flex: 1 }}
            source={require('../../assets/animation/robotA.json')}
            autoPlay
            loop/>
        </View>

        {messages.length > 0 ? (
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: wp(6.2), color:bgColor?"white":'black',paddingVertical:5 }}>Assistant</Text>
            <View
              style={{
                height: hp(70),
                borderRadius: 12,
                backgroundColor: '#c7d1cc',
              }}>
              <ScrollView
                bounces={false}
                style={{ paddingHorizontal: 10,paddingVertical:5 }}
                showsVerticalScrollIndicator={true}>

                {messages.map((message, index) => {
                  
                    return ( 
                        <View key={index+2}>
                        <View
                          key={index}
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            paddingTop: 10,
                            padding: 5,
                          }}>
                            <Animatable.Text
                            animation="fadeInRight" iterationCount={1} direction="normal"
                             style={styles.pos}>You</Animatable.Text>
                          <Animatable.View
                          animation="fadeInRight" iterationCount={1} direction="normal"
                            style={{
                              width: wp(60),
                              backgroundColor: 'white',
                              padding: 10,
                              borderRadius:8
                            }}>

                            <Text style={{ color: 'black',fontSize:16 }}>
                              {message.userInput}
                            </Text>
                          </Animatable.View>
                        </View>
  
                        <View
                          key={index + 1}
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            paddingTop: 10,
                            padding: 5,
                          }}>
                            <Animatable.Text
                            animation="fadeInLeft" iterationCount={1} direction="normal"
                             style={styles.Apipos}>Assistant</Animatable.Text>
                          <Animatable.View
                          animation="fadeInLeft" iterationCount={1} direction="normal"
                            style={{
                              width: wp(60),
                              backgroundColor: 'skyblue',
                              padding: 10,
                              borderBottomEndRadius: 8,
                              borderTopLeftRadius: 1,
                              borderBottomLeftRadius: 8,
                              borderTopRightRadius: 8,
                            }}>
                            <Text style={{ color: 'black',fontSize:16 }}>
                              {message.apiRes}
                            </Text>
                          </Animatable.View>
                        </View>
                      </View>  
                    );
                   

                })}


              </ScrollView>
            </View>
          </View>
        ) : (
          
          <Features />
        )}

        {/* Buttons --> Clear & stop */}

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {recording == false ? (
            // Stop
            <TouchableOpacity
              onPress={() => {
                startRecording();
                playSound();
              }}>
              <LottieView
                style={{ width: hp(15), height: hp(15) }}
                source={require('../../assets/animation/voice.json')}
                autoPlay={false}
                loop={false}
              />
            </TouchableOpacity>
          ) : (
            // Start
            <TouchableOpacity onPress={() => stopRecording()}>
              <LottieView
                style={{ width: hp(12), height: hp(15) }}
                source={require('../../assets/animation/voice.json')}
                autoPlay
                loop
              />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={() => clear()}
              style={{
                backgroundColor: 'black',
                paddingHorizontal: 15,
                paddingVertical: 10,
                position: 'absolute',
                right: 25,
                borderRadius: 25,
              }}>
              <Text style={{ color: 'white', fontSize: wp(4) }}>Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={() => stopRecording()}
              style={{
                backgroundColor: 'red',
                paddingHorizontal: 15,
                paddingVertical: 10,
                position: 'absolute',
                left: 25,
                borderRadius: 25,
              }}>
              <Text style={{ color: 'white', fontSize: wp(4) }}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    height: wp(30),
    width: wp(30),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: -10,
  },
  pos:{
    position:'absolute',
    zIndex:1,
    right:5,
    backgroundColor:'white',
    paddingHorizontal:5,
    paddingVertical:2,
    borderBottomRightRadius:1,
    borderTopLeftRadius:8,
    color:'skyblue',
    fontSize:12,
    letterSpacing:1
  },
  Apipos:{
    position:'absolute',
    zIndex:1,
    left:5,
    backgroundColor:'skyblue',
    paddingHorizontal:5,
    paddingVertical:3,
    borderTopLeftRadius:1,
    borderTopRightRadius:8,
    color:'white',  
    fontSize:13,
    letterSpacing:2
  },
});
