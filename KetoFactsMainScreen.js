import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { AppConstants } from './AppConstants';
import {visitURL} from './URLVisitor';


const {useState} = React;

const KetoFactsMainScreen = ({ navigation }) => {

  useEffect(() => {
    onGetFacts();
  }, []);

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
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

    setUpdating(true);
    fetch("http://joek41.sg-host.com/api/Keto/fact/" + factID, requestOpts)
      .then(response => response.json())
      .then((responseJson) => {
        onGetFacts();
        setUpdating(false);
        console.log(responseJson);
      });
  }

  function onPressFactTrue(factID) {
    const requestOpts = {
        method: 'POST',
        body: JSON.stringify({factIsTrue:true}),
    };

    setUpdating(true);
    fetch("http://joek41.sg-host.com/api/Keto/fact/" + factID, requestOpts)
      .then(response => response.json())
      .then((responseJson) => {
        onGetFacts();
        setUpdating(false);
        console.log(responseJson);
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
            facts.push(<View key={fact.factID}>
                          <Text style={virtaAppStyles.factNumberText}>{count + ". "}<Text style={fact.factIsTrue ? virtaAppStyles.trueFactText : virtaAppStyles.falseFactText}>{fact.factText} </Text></Text>

                          <TouchableOpacity onPress={() => fact.factIsTrue ? onPressFactFalse(fact.factID) : onPressFactTrue(fact.factID)}>
                            <View style={[virtaAppStyles.smallButton, {marginBottom: 20}]}>
                              <Text style={virtaAppStyles.smallButtonText}>{fact.factIsTrue ? 'Set = False' : 'Set = True'}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>);
            count++;
          }
          setKetoFacts(facts);
          setRefreshFactsShown(true);
      })
      .catch(error => console.log(error))
  }

  const {wid} = Dimensions.get("window") - 100;

  return (
      <View style={virtaAppStyles.container}>
        <Text style={virtaAppStyles.headerText}>Keto Facts (coming from Joe's demo API)</Text>
        <Text onPress={onPressSwagger} style={[virtaAppStyles.subheaderText, virtaAppStyles.bulletedLink, {paddingTop: 10,paddingBottom:10,}]}>API Swagger documentation</Text>
        <ScrollView style={{height: 100,width:wid,backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={virtaAppStyles.factsView}>
            {loading?
              <Text style={virtaAppStyles.factNumberText}>Getting facts from API...</Text>
              : (updating?
                  <Text style={virtaAppStyles.factNumberText}>Updating factIsTrue value via API POST...</Text>
                  : ketoFacts)}
          </View>
        </ScrollView>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            {isRefreshFactsShown ? <TouchableOpacity onPress={onGetFacts}>
              <View style={[virtaAppStyles.standardButton, {marginTop: 20}]}>
                <Text style={virtaAppStyles.standardButtonText}>Refresh Facts</Text>
              </View>
            </TouchableOpacity> : null}
          </View>
      </View>
  );
}

export default KetoFactsMainScreen;
