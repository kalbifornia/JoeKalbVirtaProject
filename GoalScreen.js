import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

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

  return (
    <View style={virtaAppStyles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={virtaAppStyles.unboldedHeaderText}>App <b>Goal:</b> to help me help Virta <b>reverse diabetes</b> in <b>100 million</b> people</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={onPressAboutVirta} style={{paddingTop: 20}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>About Virta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressAboutJoe} style={{paddingTop: 20}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>About Joe</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalScreen;
