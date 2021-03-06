import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const CompareMainScreen = ({ navigation }) => {

  function onPressUsualCare() {
    navigation.navigate("UsualCareMain");
  }

  function onPressVirta() {
    navigation.navigate("VirtaCareMain");
  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={onPressUsualCare}>
              <View style={virtaAppStyles.usualCareButton}>
                <Text style={virtaAppStyles.usualCareButtonText}>The Usual Care</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={virtaAppStyles.headerText}>vs.</Text>
          </View>

          <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-start'}}>
            <TouchableOpacity onPress={onPressVirta}>
              <View style={virtaAppStyles.standardButton}>
                <Image source={require('./assets/virta-logo-white.png')}
                  style={{width: 120, height: 40, }}
                />
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

export default CompareMainScreen;
