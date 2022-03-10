import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import Collapsible from 'react-native-collapsible';
import { AppConstants } from './AppConstants';

const {useState} = React;

const JoeCompetenceMainScreen = ({ navigation }) => {

  const [isCorporateCareerCollapsed,setCorporateCareerCollapsed] = useState(true);
  const [isSaltilloCollapsed,setSaltilloCollapsed] = useState(true);
  const [isMotoristsCollapsed,setMotoristsCollapsed] = useState(true);
  const [isGrangeCollapsed,setGrangeCollapsed] = useState(true);
  const [isSideProjectsCollapsed,setSideProjectsCollapsed] = useState(true);
  const [isHookShotsCollapsed,setHookShotsCollapsed] = useState(true);
  const [isDRCollapsed,setDRCollapsed] = useState(true);
  const [isYCWCollapsed,setYCWCollapsed] = useState(true);
  const [isHighlandCollapsed,setHighlandCollapsed] = useState(true);
  const [isThisAppCollapsed,setThisAppCollapsed] = useState(true);

  function toggleCorporateCareer() {
      setCorporateCareerCollapsed(!isCorporateCareerCollapsed);
  }

  function toggleSideProjects() {
      setSideProjectsCollapsed(!isSideProjectsCollapsed);
  }

  function toggleSaltillo() {
      setSaltilloCollapsed(!isSaltilloCollapsed);
  }

  function toggleMotorists() {
      setMotoristsCollapsed(!isMotoristsCollapsed);
  }

  function toggleGrange() {
      setGrangeCollapsed(!isGrangeCollapsed);
  }

  function toggleHookShots() {
      setHookShotsCollapsed(!isHookShotsCollapsed);
  }

  function toggleDR() {
      setDRCollapsed(!isDRCollapsed);
  }

  function toggleYCW() {
      setYCWCollapsed(!isYCWCollapsed);
  }

  function toggleHighland() {
      setHighlandCollapsed(!isHighlandCollapsed);
  }

  function toggleThisApp() {
    setThisAppCollapsed(!isThisAppCollapsed);
  }

  function expandAll() {
    setCorporateCareerCollapsed(false);
    setSideProjectsCollapsed(false);
    setSaltilloCollapsed(false);
    setMotoristsCollapsed(false);
    setGrangeCollapsed(false);
    setHookShotsCollapsed(false);
    setDRCollapsed(false);
    setYCWCollapsed(false);
    setHighlandCollapsed(false);
    setThisAppCollapsed(false);
  }

  function collapseAll() {
    setCorporateCareerCollapsed(true);
    setSideProjectsCollapsed(true);
    setSaltilloCollapsed(true);
    setMotoristsCollapsed(true);
    setGrangeCollapsed(true);
    setHookShotsCollapsed(true);
    setDRCollapsed(true);
    setYCWCollapsed(true);
    setHighlandCollapsed(true);
    setThisAppCollapsed(true);
  }

  function onPressDR() {
    Linking.openURL('http://diseasereversals.com').catch((err) =>
      console.error("An error occurred trying to open DiseaseReversals.com.", err));
      alert.error("An error occurred trying to open DiseaseReverals.com");
  }

  function onPressHighland() {
    Linking.openURL('https://highland.k12.oh.us').catch((err) =>
      console.error("An error occurred trying to open Highland High School website.", err));
      alert.error("An error occurred trying to open Highland High School website");
  }

  function onPressYCW() {
    Linking.openURL('https://youcuredwhat.com').catch((err) =>
      console.error("An error occurred trying to open YouCuredWhat.com.", err));
      alert.error("An error occurred trying to open YouCuredWhat.com");
  }

  function onPressHookShotsTwitter() {
    Linking.openURL('https://twitter.com/HookShotsApp').catch((err) =>
      console.error("An error occurred trying to open twitter.com/HookShotsApp.", err));
      alert.error("An error occurred trying to open twitter.com/HookShotsApp");
  }

  return (
      <View style={virtaAppStyles.container}>
        <View style={{flex:1}}>
          <Text style={virtaAppStyles.collapsibleParentText} onPress={toggleCorporateCareer}>{isCorporateCareerCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} 14-year Software Development Corporate Career</Text>
          <Collapsible collapsed={isCorporateCareerCollapsed}>
            <Text style={virtaAppStyles.collapsibleChildText}><strong>Corporate success</strong> in front-end dev, back-end dev, team leadership, and architecture</Text>
            <Text style={virtaAppStyles.collapsibleChildText}>Detail-oriented <strong>problem solver</strong></Text>
            <Text style={virtaAppStyles.collapsibleChildText}><strong>Recent promotion</strong> (February 2022) from <em>Solution Architect</em> to <em>Senior Solution Architect</em></Text>
            <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleSaltillo}>{isSaltilloCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Developer: Saltillo Corporation (2008-2010)
              <Image source={require('./assets/saltillo.png')}
                style={{width: 24, height: 24, textAlign: 'center'}}
              />
            </Text>
            <Collapsible collapsed={isSaltilloCollapsed}>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Developed C++ for Augmentative and Alternative Communication devices</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Worked full-time as a summer intern and part-time during college semesters</Text>
            </Collapsible>
            <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleMotorists}>{isMotoristsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Developer: Motorists Insurance Group [now Encova] (2010-2019)
              <Image source={require('./assets/encova.png')}
                style={{width: 24, height: 24, textAlign: 'center'}}
              />
            </Text>
            <Collapsible collapsed={isMotoristsCollapsed}>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>First few years: Worked on homegrown systems, back-end systems, Siebel</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Last few years: integration developer (Mulesoft ESB and Guidewire)</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Became senior integration developer and led small team focused on Document Management during large Systems Transformation project</Text>
            </Collapsible>
            <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleGrange}>{isGrangeCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Architect: Grange Insurance (2019-current)
              <Image source={require('./assets/grange.png')}
                style={{width: 24, height: 24, textAlign: 'center'}}
              />
            </Text>
            <Collapsible collapsed={isGrangeCollapsed}>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Senior Solution Architect for Middleware team (Mulesoft ESB)</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Designed over 100 APIs for core systems transformation</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>Friendly communication, high-quality analysis and designs, solid ideas and proofs of concept</Text>
            </Collapsible>
          </Collapsible>
          <Text style={virtaAppStyles.collapsibleParentText} onPress={toggleSideProjects}>{isSideProjectsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Side Projects</Text>
            <Collapsible collapsed={isSideProjectsCollapsed}>
              <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleHookShots}>{isHookShotsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <em>Hook Shots App</em>: iPhone & Android App</Text>
              <Collapsible collapsed={isHookShotsCollapsed}>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Released in July 2015 to App Store and Google Play Store</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Fun, silly basketball app. Create a player, challenge friends to 1-minute contests</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>App tracked records, Points Per Challenge, etc.</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Built for both iOS and Android using Corona SDK</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Backend coded using PHP and MySQL</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>No longer in App Store but <Text style={virtaAppStyles.bulletedLink} onPress={onPressHookShotsTwitter}>old Twitter account</Text> still exists</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Loading screens had some killer puns</Text>
              </Collapsible>
              <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleDR}>{isDRCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <em>Disease Reversals</em> Website</Text>
              <Collapsible collapsed={isDRCollapsed}>
                <Text style={[virtaAppStyles.collapsibleGrandchildText,virtaAppStyles.bulletedLink]} onPress={onPressDR}>DiseaseReversals.com</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Site combines my passions of health/nutrition and software dev</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Stores anecdotes of real-world disease reversals, categorized by diet used</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Front-end: JavaScript, HTML, CSS. Back-end: MySQL, PHP</Text>
              </Collapsible>
              <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleYCW}>{isYCWCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <em>You Cured What?!</em> Podcast Website</Text>
              <Collapsible collapsed={isYCWCollapsed}>
                <Text style={[virtaAppStyles.collapsibleGrandchildText,virtaAppStyles.bulletedLink]} onPress={onPressYCW}>YouCuredWhat.com</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Website for my "You Cured What?!" podcast about real people reversing "irreversible" conditions</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Built using combination of WordPress, Divi, custom CSS, JavaScript, PHP</Text>
              </Collapsible>
              <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleHighland}>{isHighlandCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Highland High School Website</Text>
              <Collapsible collapsed={isHighlandCollapsed}>
                <Text style={[virtaAppStyles.collapsibleGrandchildText,virtaAppStyles.bulletedLink]} onPress={onPressHighland}>highland.k12.oh.us</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>My first paid Web gig</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Built using combination of WordPress, Divi, custom CSS, JavaScript, PHP, MySQL</Text>
              </Collapsible>
              <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleThisApp}>{isThisAppCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} This App</Text>
              <Collapsible collapsed={isThisAppCollapsed}>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>This app has been a fun side project!</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>It has helped me learn React</Text>
                <Text style={virtaAppStyles.collapsibleGrandchildText}>Shows that I am a strong developer, a go-getter, and very aligned with Virta's mission</Text>
              </Collapsible>
          </Collapsible>
          <Text onPress={expandAll}>Expand All</Text>
          <Text onPress={collapseAll}>Collapse All</Text>
        </View>
      </View>
  );
}

export default JoeCompetenceMainScreen;
