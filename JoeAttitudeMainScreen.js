import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

const {useState} = React;

const JoeAttitudeMainScreen = ({ navigation }) => {

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <Text style={[virtaAppStyles.headerText, {fontSize: 50}]}>Attitude</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Confident but humble. Positive.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Friendly, communicative, problem-solving.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Solutions-oriented. Motivated to address root cause.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Growth mindset. I love to learn.</Text>
            <Text style={virtaAppStyles.subBulletText}>-Led me to: create a smartphone app, do open mic stand-up comedy, become Toastmasters Competent Communicator, start an inspirational podcast about people healing diseases, start a website about people reversing diseases.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}"Whether you think you can, or think you can't, you're right"</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Men and women are much more powerful and capable than we are commonly led to believe.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}I am determined to earn a living by helping people. And Virta helps people.</Text>
          </View>
      </View>
  );
}

export default JoeAttitudeMainScreen;
