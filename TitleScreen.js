import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const getFullName = (firstName, secondName, thirdName) => {
  return firstName +  " "  + secondName + " " + thirdName;
}



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
          style={{width: 177, height: 59, textAlign: 'center'}}
        />
      </View>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50}}>
        <TouchableOpacity onPress={_onPress} style={{visibility: buttonVisible ? 'visible' : 'hidden'}}>
          <View style={virtaAppStyles.standardButton}>
            <Text style={virtaAppStyles.standardButtonText}>Begin</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20}}>
        <Text style={{fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif', fontSize: '18px', visibility: (footerVisible) ? 'visible' : 'hidden',}}>The "P.O.C." is <i>intended</i> to stand for "Proof of Concept" {String.fromCodePoint('0x1F61C')}</Text>
      </View>
    </View>
  );
}

export default TitleScreen;
