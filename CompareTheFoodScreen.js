import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking, ScrollView, Dimensions } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';

const {useState} = React;

const CompareTheFoodScreen = ({ navigation }) => {

  function onScrollKeto(nativeEvent) {
  }

  function onScrollUsualCare(nativeEvent) {
  }

  const ketoImages = [
    require('./assets/ketoFoods/1.jfif'),
    require('./assets/ketoFoods/2.jfif'),
    require('./assets/ketoFoods/3.jfif'),
    require('./assets/ketoFoods/4.jfif'),
    require('./assets/ketoFoods/5.jfif'),
    require('./assets/ketoFoods/6.jfif'),
    require('./assets/ketoFoods/7.jfif'),
  ];

  const usualCareImages = [
    require('./assets/usualCareFoods/1.jfif'),
    require('./assets/usualCareFoods/2.jfif'),
    require('./assets/usualCareFoods/3.jfif'),
    require('./assets/usualCareFoods/4.jfif'),
    require('./assets/usualCareFoods/5.jfif'),
    require('./assets/usualCareFoods/6.jfif'),
    require('./assets/usualCareFoods/7.jfif'),
    require('./assets/usualCareFoods/8.jfif'),
    require('./assets/usualCareFoods/9.jfif'),
    require('./assets/usualCareFoods/10.jfif'),
  ];

  const {width} = Dimensions.get("window");
  const height = width * 100 / 60;

  return (
    <View style={virtaAppStyles.container}>
      <Text style={virtaAppStyles.headerText}>Virta (Keto)</Text>
      <View style={{width: width,}}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={true}
          onScroll={onScrollKeto}
          style={{width: width,paddingTop: 50,paddingBottom: 50}}>
          {
            ketoImages.map((image,index) => (
              <Image
                key={index}
                source={image}
                style={{width:width,height: 300, resizeMode: 'contain'}}
              />
            ))
          }
        </ScrollView>
      </View>

      <Text style={virtaAppStyles.headerText}>Usual Care</Text>
      <View style={{width: width,}}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={true}
          onScroll={onScrollUsualCare}
          style={{width:width,paddingTop: 50, paddingBottom: 50}}>
          {
            usualCareImages.map((image,index) => (
              <Image
                key={index}
                source={image}
                style={{width:width,height: 300, resizeMode: 'contain'}}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

export default CompareTheFoodScreen;
