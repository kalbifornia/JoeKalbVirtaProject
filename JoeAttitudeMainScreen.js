import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import {AppConstants} from './AppConstants';

const {useState} = React;

const JoeAttitudeMainScreen = ({ navigation }) => {

  return (
      <ScrollView>
        <View style={virtaAppStyles.container}>
            <View style={{flex: 1}}>
                <Text style={[virtaAppStyles.headerText, {paddingBottom: 20}]}>Attitude</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Confident but humble. Positive. {AppConstants.sunshine}{AppConstants.sunshine}{AppConstants.sunshine}</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Friendly, communicative, problem-solving. {AppConstants.handshake}</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Solutions-oriented. Motivated to address root cause. {AppConstants.chart}</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Growth mindset. I love to learn. {AppConstants.openBook}</Text>
                <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} Led me to: create a smartphone app, do open mic stand-up comedy, become Toastmasters Competent Communicator, start an inspirational podcast about people healing diseases, start a website about people reversing diseases.</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} "Whether you think you can, or think you can't, you're right" {AppConstants.brain}{AppConstants.heart}</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Men and women are much more powerful and capable than we are commonly led to believe. {AppConstants.bicep}{AppConstants.bicep}{AppConstants.bicep}</Text>
                <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} I am determined to earn a living by helping people. And Virta helps people. {AppConstants.sunriseOverMountains}</Text>

            </View>
        </View>
      </ScrollView>
  );
}

export default JoeAttitudeMainScreen;
