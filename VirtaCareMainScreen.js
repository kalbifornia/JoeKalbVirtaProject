import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

const {useState} = React;

const VirtaCareMainScreen = ({ navigation }) => {
  const [imageVisible, setImageVisible] = useState(false);

  setTimeout(function() {
    setImageVisible(true);
    console.log("Just set image visible");
  }, 2000);

  function onPressHallbergVideo() {
    Linking.openURL('https://youtu.be/JLbIxKgA4MY').catch((err) =>
      console.error("An error occurred trying to open the Sarah Hallberg video.", err));
  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1}}>
            <Text style={[virtaAppStyles.headerText,virtaAppStyles.bulletedMainListText]}>The Virta Health Way</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}1-on-1 support with experienced, successful care staff</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Implicitly: "You can do this. We will help."</Text>
            <Text style={virtaAppStyles.bulletedMainListText}>{'\u2022'}Turn Your Diabetes into setebaiD!</Text>
            <TouchableOpacity onPress={onPressHallbergVideo}>
            {
              imageVisible ? <Image source={require('./assets/hallberg.png')}
                style={{width: 355, height: 200,}}
              /> : null
            }
            </TouchableOpacity>
            {imageVisible ? <Text style={virtaAppStyles.belowImageText}>Don't believe me? {'\u261d'}See it from Virta's Medical Director!</Text> : null}
          </View>
      </View>
  );
}

export default VirtaCareMainScreen;
