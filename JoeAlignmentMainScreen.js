import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import {visitURL} from './URLVisitor';
import {AppConstants} from './AppConstants';

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
    <ScrollView>
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <Text style={[virtaAppStyles.headerText, {paddingBottom: 20}]}>Alignment</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Like Virta, I'm passionate about helping people <Text style={{fontWeight:'bold'}}>reverse disease</Text>.</Text>
            <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} I have spent thousands of hours towards this goal.</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Created, hosted, produced <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCW}>You Cured What?! podcast</Text> about reversing disease</Text>
            <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} <Text style={{fontWeight:'bold'}}>30 episodes so far</Text>. Restarting production soon!</Text>
            <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} Episodes <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCWDebra}>7</Text> and <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCWAmanda}>18</Text> specifically on <Text style={{fontWeight:'bold'}}>Low Carb and Type 2 Diabetes!</Text></Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Created, developed <Text style={virtaAppStyles.bulletedLink} onPress={onPressDR}>DiseaseReversals.com</Text></Text>
            <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} Website collecting hundreds of real-world anecdotes of people reversing diseases. Many using <Text style={{fontWeight:'bold'}}>Keto for Type 2 Diabetes!</Text></Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Attended #LowCarbOSU conference back in summer of 2018. Met some great Virta folks.</Text>
            <Text style={virtaAppStyles.subBulletText}>{AppConstants.bullet} <Text style={virtaAppStyles.bulletedLink} onPress={onPressBlogPosts}>Documented</Text> my experience at this awesome conference</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{AppConstants.bullet} Created and led Columbus <Text style={{fontWeight:'bold'}}>Keto Meetup</Text> group</Text>
          </View>
      </View>
    </ScrollView>
  );
}

export default JoeAlignmentMainScreen;
