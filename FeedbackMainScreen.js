import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const FeedbackMainScreen = ({ navigation }) => {

  const [feedbackTextValue, setFeedbackTextValue] = React.useState('Please enter your feedback here for how Joe can prove himself capable of providing value to Virta.');
  const [feedbackProviderNameValue, setFeedbackProviderNameValue] = React.useState('');
  const [feedbackProviderEmailValue, setFeedbackProviderEmailValue] = React.useState('');

  const [nameValidationError, setNameValidationError] = React.useState(true);
  const [emailValidationError, setEmailValidationError] = React.useState(true);
  const [feedbackTextValidationError, setFeedbackTextValidationError] = React.useState(false);

  function isValidEmailAddress(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email);
  }

  function onChangeFeedbackProviderNameValue(newVal) {
    setFeedbackProviderNameValue(newVal);
    if (newVal == "") {
      setNameValidationError(true);
    } else {
      setNameValidationError(false);
    }
  }

  function onChangeFeedbackProviderEmailValue(newVal) {
    setFeedbackProviderEmailValue(newVal);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!isValidEmailAddress(newVal)) {
      setEmailValidationError(true);
    } else {
      setEmailValidationError(false);
    }
  }

  function onChangeFeedbackText(newVal) {
    setFeedbackTextValue(newVal);
    if (newVal == "") {
      setFeedbackTextValidationError(true);
    } else {
      setFeedbackTextValidationError(false);
    }
  }

  function onPressSendFeedback() {
    if (nameValidationError) {
      alert("Please enter a valid name.");
      return;
    }

    if (emailValidationError) {
      alert("Please enter a valid email address/");
      return;
    }

    if (feedbackTextValidationError) {
      alert("Please enter some feedback text.");
      return;
    }

    sendFeedbackToJoe(feedbackProviderNameValue,feedbackProviderEmailValue,feedbackTextValue);
  }

  function sendFeedbackToJoe(name,email,feedback) {
    const requestOpts = {
        method: 'POST',
        body: JSON.stringify({name:name,email:email,feedback:feedback}),
    };

    fetch("http://joek41.sg-host.com/api/email/", requestOpts)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status == "success") {
          alert("Successfully sent the feedback to Joe. This was set up by sending your feedback via HTTP POST to a web API Joe set up, which emailed the feedback to joekalb@protonmail.com");
        } else {
          alert("Something went wrong attempting to send the feedback to Joe. Please consider sending him this feedback directly via email at joekalb@protonmail.com. Thank you very much!")
        }
      });
  }

  return (
      <ScrollView>
        <View style={virtaAppStyles.container}>
          <View style={{display: 'flex', justifyContent: 'center', }}>
            <Text style={[virtaAppStyles.unboldedMainText, {paddingTop: 10,}]}>Clearly, I still have <Text style={virtaAppStyles.mainText}>a lot to learn.</Text></Text>
            <Text style={[virtaAppStyles.unboldedMainText, {paddingTop: 10}]}>I am <Text style={virtaAppStyles.mainText}>eager</Text> to hear so that I can help you build systems that help your patients remarkably improve their health.</Text>
            <Text style={[virtaAppStyles.unboldedMainText, {paddingTop: 10}]}>What can I do to help prove myself to Virta Health that I can <Text style={virtaAppStyles.mainText}>add value to your team?</Text></Text>
            <View style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
              <Text style={[virtaAppStyles.unboldedMainText,{flex: 1,textAlign:'left'}, nameValidationError ? {color : 'red'} : {color: 'black'}]}>Name:</Text>
              <TextInput
                editableafds
                value={feedbackProviderNameValue}
                onChangeText={feedbackProviderNameValue => onChangeFeedbackProviderNameValue(feedbackProviderNameValue)}
                style={[virtaAppStyles.oneLineInput,{flex: 3}]}
              />
            </View>

            <View style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
              <Text style={[virtaAppStyles.unboldedMainText,{flex: 1,textAlign:'left'}, emailValidationError ? {color : 'red'} : {color: 'black'}]}>Email:</Text>
              <TextInput
                editable
                value={feedbackProviderEmailValue}
                autoComplete='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={feedbackProviderEmailValue => onChangeFeedbackProviderEmailValue(feedbackProviderEmailValue)}
                style={[virtaAppStyles.oneLineInput,{flex: 3}]}
              />
            </View>

            <View style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
              <Text style={[virtaAppStyles.unboldedMainText,{flex: 1,textAlign:'left'}, feedbackTextValidationError ? {color : 'red'} : {color: 'black'}]}>Feedback:</Text>
              <TextInput
                multiline
                numberOfLines={8}
                editable
                value={feedbackTextValue}
                onChangeText={feedbackTextValue => onChangeFeedbackText(feedbackTextValue)}
                style={[virtaAppStyles.oneLineInput,{flex: 3}]}
              />
            </View>
            <TouchableOpacity onPress={onPressSendFeedback} style={{alignItems: 'flex-end'}}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardSmallerButtonText}>Send Feedback</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  );
}

export default FeedbackMainScreen;
