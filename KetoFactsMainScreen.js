import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';
import {visitURL} from './URLVisitor';


const {useState} = React;

const KetoFactsMainScreen = ({ navigation }) => {

  useEffect(() => {
    onGetFacts();
  }, []);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [dataSource, setDataSource] = useState(null);
  const [ketoFacts, setKetoFacts] = useState([]);
  const [isRefreshFactsShown,setRefreshFactsShown] = useState(false);

  function onPressSwagger() {
    visitURL('http://joek41.sg-host.com/api/swagger-ui/dist/');
  }

  function onPressFactFalse(factID) {
    const requestOpts = {
        method: 'POST',
        body: JSON.stringify({factIsTrue:false}),
    };

    fetch("http://joek41.sg-host.com/api/Keto/fact/" + factID, requestOpts)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert("Updated factIsTrue via the API. Hit 'Refresh Facts' to pull back the updated values.");
      });
  }

  function onPressFactTrue(factID) {
    const requestOpts = {
        method: 'POST',
        body: JSON.stringify({factIsTrue:true}),
    };

    fetch("http://joek41.sg-host.com/api/Keto/fact/" + factID, requestOpts)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert("Updated factIsTrue via the API. Hit 'Refresh Facts' to pull back the updated values.");
      });

  }

  function onGetFacts() {
    setKetoFacts([]);
    setLoading(true);

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
              facts.push(<View key={fact.factID} style={{flexDirection: 'row'}}><Text style={virtaAppStyles.factNumberText}>{count + ". "}</Text><Text style={virtaAppStyles.trueFactText}>{fact.factText} </Text><TouchableOpacity onPress={() => onPressFactFalse(fact.factID)}><View style={virtaAppStyles.smallButton}><Text style={virtaAppStyles.smallButtonText}>Set = False</Text></View></TouchableOpacity></View>);
              count++;
            } else {
              facts.push(<View key={fact.factID} style={{flexDirection: 'row'}}><Text style={virtaAppStyles.factNumberText}>{count + ". "}</Text><Text style={virtaAppStyles.falseFactText}>{fact.factText} </Text><TouchableOpacity onPress={() => onPressFactTrue(fact.factID)}><View style={virtaAppStyles.smallButton}><Text style={virtaAppStyles.smallButtonText}>Set = True</Text></View></TouchableOpacity></View>);
              count++;
            }
          }
          setKetoFacts(facts);
          setRefreshFactsShown(true);
      })
      .catch(error => console.log(error))
  }

  return (
      <View style={virtaAppStyles.container}> 
        <Text style={virtaAppStyles.headerText}>Keto Facts (coming from API)</Text>
        <Text style={virtaAppStyles.subheaderText}>See the <Text style={virtaAppStyles.bulletedLink} onPress={onPressSwagger}>Swagger documentation for this API</Text></Text>
          <View style={virtaAppStyles.factView}>
            {loading? <Text style={virtaAppStyles.factNumberText}>Getting facts from API...</Text> : ketoFacts}
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            {isRefreshFactsShown ? <TouchableOpacity onPress={onGetFacts}>
              <View style={virtaAppStyles.standardButton}>
                <Text style={virtaAppStyles.standardButtonText}>Refresh Facts</Text>
              </View>
            </TouchableOpacity> : null}
          </View>
      </View>
  );
}

export default KetoFactsMainScreen;
