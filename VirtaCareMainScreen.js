import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const VirtaCareMainScreen = ({ navigation }) => {

  function onPressHallbergVideo() {
    Linking.openURL('https://youtu.be/JLbIxKgA4MY').catch((err) =>
      console.error("An error occurred trying to open the Sarah Hallberg video.", err));
  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <Text style={[virtaAppStyles.headerText,virtaAppStyles.bulletedMainListText]}>The Virta Health Way</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} 1-on-1 support with experienced, successful care staff</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Implicitly: "You can do this. We will help."</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Turn Your Diabetes into setebaiD! <Text style={virtaAppStyles.bulletedJokeText}>Get it? Diabetes is reversed!</Text></Text>
            <TouchableOpacity onPress={onPressHallbergVideo}>
            <Image source={require('./assets/hallberg.png')}
                style={{width: 355, height: 200,}}
            />
            </TouchableOpacity>
            <Text style={virtaAppStyles.belowImageText}>Don't believe me? {AppConstants.upFinger}See it from Virta's Medical Director (RIP, Dr. Hallberg: you taught the world that "Diabetes is Reversible")!</Text>
          </View>
      </View>
  );
}

export default VirtaCareMainScreen;
