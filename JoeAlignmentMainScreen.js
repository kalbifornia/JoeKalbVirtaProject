import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import {visitURL} from './URLVisitor';

const {useState} = React;

const JoeAlignmentMainScreen = ({ navigation }) => {

  function onPressYCW() {
    visitURL("https://youcuredwhat.com");
  }

  function onPressDR() {
    visitURL('http://diseasereversals.com');
  }

  function onPressBlogPosts() {
    visitURL('https://joehealthblog.blogspot.com/2018/08/');
  }

  function onPressYCWDebra() {
    visitURL('https://youcuredwhat.com/podcast/debra');
  }

  function onPressYCWAmanda() {
    visitURL('https://youcuredwhat.com/podcast/amanda');
  }

  return (
    <View style={virtaAppStyles.container}>
        <View style={{flex: 1}}>
          <Text style={[virtaAppStyles.headerText, {fontSize: 50}]}>Alignment</Text>
          <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'} Like Virta, I'm passionate about helping people reverse disease.</Text>
          <Text style={virtaAppStyles.subBulletText}>{'\u2022'} I have spent thousands of hours towards this goal.</Text>
          <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'} Created, hosted, produced <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCW}>You Cured What?! podcast</Text> about reversing disease</Text>
          <Text style={virtaAppStyles.subBulletText}>-30 episodes so far. Restarting production soon!</Text>
          <Text style={virtaAppStyles.subBulletText}>-Episodes <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCWDebra}>7</Text> and <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCWAmanda}>18</Text> specifically on Low Carb and Type 2 Diabetes!</Text>
          <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'} Created, developed <Text style={virtaAppStyles.bulletedLink} onPress={onPressDR}>DiseaseReversals.com</Text></Text>
          <Text style={virtaAppStyles.subBulletText}>-Website collecting hundreds of real-world anecdotes of people reversing diseases. Many using Keto for Type 2 Diabetes!</Text>
          <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'} Attended #LowCarbOSU conference back in summer of 2018. Met some Virta folks.</Text>
          <Text style={virtaAppStyles.subBulletText}>-<Text style={virtaAppStyles.bulletedLink} onPress={onPressBlogPosts}>Documented</Text> my experience at this awesome conference</Text>
          <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'} Created and led Columbus Keto Meetup group</Text>
        </View>
    </View>
  );
}

export default JoeAlignmentMainScreen;
