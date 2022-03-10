import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import { BarChart, Grid, Gradient, XAxis, YAxis } from 'react-native-svg-charts';
import { AppConstants } from './AppConstants';
import * as scale from 'd3-scale';

const {useState} = React;

const CompareInflammationScreen = ({ navigation }) => {

  const inflammationData = [
    {
      value: 14, //usual care inflammation up 14%
      label: "Usual Care",
      svg: {
        fill: AppConstants.inflamedOrange,
        stroke: 'black'
      }
    },
    {
      value: -39, //Virta inflammation down 39%
      label: "Virta",
      svg: {
        fill: AppConstants.virtaBlue,
        stroke: 'black'
      }
    }
  ];

  return (
      <View style={virtaAppStyles.container}>
        <Text style={[virtaAppStyles.screenHeaderText,virtaAppStyles.bulletedMainListText, {flex: 1}]}>Inflammation</Text>
        <Text style={[virtaAppStyles.mainText,{flex: 1}]}>As measured by hsCRP ("C-reactive protein") change from baseline over 1 year</Text>
        <View style={{ height: 250, width: 300, padding: 20, flexDirection: 'row', flex: 6}}>
          <YAxis
            data={inflammationData}
            contentInset={{top: 20, bottom: 20}}
            yAccessor={ ( { item } ) => ( item.value ) }
            formatLabel={(value,index) => value + "%  "}
          >
          </YAxis>
          <View style={{flex: 1, marginLeft: 10}}>
            <BarChart style={{flex: 1, color: AppConstants.virtaBlue }}
              data={inflammationData}
              contentInset={{top: 20, bottom: 20}}
              yAccessor={({ item }) => item.value}
            >
              <Grid />
            </BarChart>
          </View>
        </View>
        <View style={{height: 20, width: 300, padding: 20, flexDirection: 'row', flex: 1}}>
          <XAxis
            style={{flex:1}}
            data={inflammationData}
            scale={scale.scaleBand}
            xAccessor={ ( { item } ) => item.label }
          />
        </View>
      </View>
  );
}

export default CompareInflammationScreen;
