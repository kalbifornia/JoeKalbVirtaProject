import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

const {useState} = React;

const UsualCareMainScreen = ({ navigation }) => {

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <Text style={[virtaAppStyles.headerText, virtaAppStyles.bulletedMainListText]}>The Usual Care</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Confusing Advice</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Implicitly: "There's Nothing You Can Do"</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Diabetes is Chronic and Progressive</Text>
          </View>
      </View>
  );
}

export default UsualCareMainScreen;
