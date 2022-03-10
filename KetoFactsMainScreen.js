import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';

const {useState} = React;

const KetoFactsMainScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [dataSource, setDataSource] = useState(null);
  const [myValue, setMyValue] = useState("ABC");
  const [myFacts, setMyFacts] = useState([]);

  function goForFetch() {

    fetch("http://joek41.sg-host.com/api/Keto/fact")
      .then(response => response.json())
      .then((responseJson) => {
          console.log('getting data from fetch', responseJson);
          setLoading(false);
          setDataSource(responseJson);

          let facts = [];
          let count = 1;
          for (let fact of responseJson) {
            if (fact.factIsTrue) {
              facts.push(<Text style={virtaAppStyles.factText}>{count + ". " + fact.factText}</Text>);
              count++;
            } else {
              console.log("Fact " + fact.factID + " is not true");
            }
          }
          setMyFacts(facts);
      })
      .catch(error => console.log(error))
  }

  return (
      <View style={virtaAppStyles.container}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Text style={virtaAppStyles.mainText}>Keto Facts (from API call)</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            {myFacts}
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <TouchableOpacity onPress={goForFetch}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>Get the Facts</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

export default KetoFactsMainScreen;
