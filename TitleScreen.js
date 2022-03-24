import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const TitleScreen = ({ navigation }, props) => {
  const [footerVisible, setFooterVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  setTimeout(function() {
    setFooterVisible(true);
    setButtonVisible(true);
  }, 2000);

  function _onPress() {
    navigation.navigate('Goal');
  }

  return (
    <View style={virtaAppStyles.container}>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={[virtaAppStyles.headerText,{paddingBottom:20}]}>Joe Kalb's P.O.C. React app for</Text>
        <Image source={require('./assets/virta-logo.png')}
          style={{width: 177, height: 59}}
        />
      </View>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50}}>
        {buttonVisible? <TouchableOpacity onPress={_onPress}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>Begin</Text>
          </View>
        </TouchableOpacity> : null}
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20}}>
      {
        footerVisible ? <Text style={{fontFamily: 'Helvetica', fontSize: 18,}}>The "P.O.C." is <Text style={{fontStyle:'italic'}}>intended</Text> to stand for "Proof of Concept" {AppConstants.winkFace}</Text> : null
      }
      </View>
    </View>
  );
}

export default TitleScreen;
