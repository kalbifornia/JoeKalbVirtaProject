import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

const {useState} = React;

const JoeAttitudeMainScreen = ({ navigation }) => {

  function onPressCompetence() {

  }

  function onPressAttitude() {

  }

  function onPressAlignment() {

  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/joekalb.jpg')}
                style={{width: 150, height: 150}}
              />
              <Text style={[virtaAppStyles.headerText, {marginLeft: 100, fontSize: 50}]}>Joe Kalb</Text>
            </View>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}<strong>Doer</strong>. Strong developer, communicator, and co-worker</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Confident but humble attitude, <strong>growth mindset</strong></Text>
            <Text style={[virtaAppStyles.bulletedMainListText, {marginBottom: 15}]}>{'\u2022'}<strong>Highly aligned</strong> with Virta's mission</Text>
            <TouchableOpacity onPress={onPressCompetence} style={{marginTop: 15, marginBottom: 15, alignItems: 'center'}}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>Competence</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAttitude} style={{marginTop: 15, marginBottom: 15, alignItems: 'center'}}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>Attitude</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAlignment} style={{marginTop: 15, marginBottom: 15, alignItems: 'center'}}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>Alignment</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

export default JoeAttitudeMainScreen;
