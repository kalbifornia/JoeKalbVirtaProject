import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { visitURL } from './URLVisitor';
import { AppConstants } from './AppConstants';

const {useState} = React;

const AboutJoeMainScreen = ({ navigation }) => {

  function onPressCompetence() {
    navigation.navigate("JoeCompetence");
  }

  function onPressAttitude() {
    navigation.navigate("JoeAttitude");
  }

  function onPressAlignment() {
    navigation.navigate("JoeAlignment");
  }

  function onPressVideoIntro() {
    visitURL("TODO");
  }

  return (
      <ScrollView>
        <View style={virtaAppStyles.container}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./assets/joekalb.jpg')}
                  style={{width: 100, height: 100}}
                />
                <View>
                  <Text style={[virtaAppStyles.headerText, {marginLeft: 30}]}>Joe Kalb</Text>
                </View>
              </View>
              <TouchableOpacity onPress={onPressVideoIntro} style={{  marginTop: 15, marginBottom: 15, alignItems: 'flex-start'}}>
                <View style={virtaAppStyles.mediumButton}>
                  <Text style={virtaAppStyles.mediumButtonText}>Video Intro {AppConstants.movieCamera}</Text>
                </View>
              </TouchableOpacity>
              <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Doer</Text>. Strong developer, communicator, and co-worker</Text>
              <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Confident but humble attitude, <Text style={{fontWeight: 'bold'}}>growth mindset</Text></Text>
              <Text style={[virtaAppStyles.bulletedMainListText, {marginBottom: 15}]}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Highly aligned</Text> with Virta's mission</Text>
              <TouchableOpacity onPress={onPressCompetence} style={{ marginBottom: 15, alignItems: 'center'}}>
                <View style={virtaAppStyles.standardButton}>
                  <Text style={virtaAppStyles.standardButtonText}>Competence</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressAttitude} style={{marginBottom: 15, alignItems: 'center'}}>
                <View style={virtaAppStyles.standardButton}>
                  <Text style={virtaAppStyles.standardButtonText}>Attitude</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressAlignment} style={{ marginBottom: 15, alignItems: 'center'}}>
                <View style={virtaAppStyles.standardButton}>
                  <Text style={virtaAppStyles.standardButtonText}>Alignment</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
  );
}

export default AboutJoeMainScreen;
