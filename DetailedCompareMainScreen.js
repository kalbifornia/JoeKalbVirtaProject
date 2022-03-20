import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const DetailedCompareMainScreen = ({ navigation }) => {

  function onPressHeart() {
    navigation.navigate("CompareMain");
  }

  function onPressInflammation() {
    navigation.navigate("CompareInflammation");
  }

  function onPressFood() {
    navigation.navigate("CompareTheFood");
  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={virtaAppStyles.headerText}>Detailed Comparison: The Usual Care vs. Virta</Text>
          </View>

          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={onPressHeart}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}><Text style={{color: 'red'}}>{String.fromCodePoint('0x1F4D6')}</Text> Overview</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={onPressFood}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>{String.fromCodePoint('0x1F372')} The Food</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={onPressInflammation}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>{String.fromCodePoint('0x1F525')} Inflammation</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

export default DetailedCompareMainScreen;
