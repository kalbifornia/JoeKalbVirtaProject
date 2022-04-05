import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import {AppConstants} from './AppConstants';

const {useState} = React;

const GoalScreen = ({ navigation }) => {

  function onPressAboutVirta() {
    navigation.navigate('DetailedCompareMain');
  }

  function onPressKetoFacts() {
    navigation.navigate('KetoFactsMain');
  }

  function onPressAboutJoe() {
    navigation.navigate('AboutJoeMain');
  }

  function onPressDemoAPI() {
    navigation.navigate('KetoFactsMain');
  }

  function onPressProvideFeedback() {
    navigation.navigate('FeedbackMain');
  }

  return (
    <View style={virtaAppStyles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={virtaAppStyles.unboldedHeaderText}>App <Text style={{fontWeight: 'bold'}}>Goal:</Text> to help me help Virta <Text style={{fontWeight: 'bold'}}>reverse diabetes</Text> in <Text style={{fontWeight: 'bold'}}>100 million</Text> people {AppConstants.bicep}{AppConstants.bicep}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', paddingTop: 10}}>
        <Text>I am a good developer, capable of learning new languages (like React!), very driven, highly aligned with Virta's mission</Text>
      </View>
      <View style={{flex: 3, justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={onPressAboutJoe} style={{paddingTop: 20}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>About Joe</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressAboutVirta} style={{paddingTop: 20}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>About Virta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressDemoAPI} style={{paddingTop: 20}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardSmallerButtonText}>Demo API integration</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={onPressProvideFeedback}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardSmallerButtonText}>Virta: Provide Feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalScreen;
