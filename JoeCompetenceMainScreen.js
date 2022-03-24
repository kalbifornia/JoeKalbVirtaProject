import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { virtaAppStyles } from './VirtaAppStyle';
import Collapsible from 'react-native-collapsible';
import { AppConstants } from './AppConstants';
import {visitURL} from './URLVisitor';

const {useState} = React;

const JoeCompetenceMainScreen = ({ navigation }) => {

  const [isCorporateCareerCollapsed,setCorporateCareerCollapsed] = useState(true);
  const [isHighLevelOverviewCollapsed,setHighLevelOverviewCollapsed] = useState(true);
  const [isSaltilloCollapsed,setSaltilloCollapsed] = useState(true);
  const [isMotoristsCollapsed,setMotoristsCollapsed] = useState(true);
  const [isGrangeCollapsed,setGrangeCollapsed] = useState(true);
  const [isSideProjectsCollapsed,setSideProjectsCollapsed] = useState(true);
  const [isHookShotsCollapsed,setHookShotsCollapsed] = useState(true);
  const [isDRCollapsed,setDRCollapsed] = useState(true);
  const [isYCWCollapsed,setYCWCollapsed] = useState(true);
  const [isHighlandCollapsed,setHighlandCollapsed] = useState(true);
  const [isThisAppCollapsed,setThisAppCollapsed] = useState(true);
  const [isPersonalLifeCollapsed,setPersonalLifeCollapsed] = useState(true);

  function toggleCorporateCareer() {
      setCorporateCareerCollapsed(!isCorporateCareerCollapsed);
  }

  function toggleHighLevelOverview() {
    setHighLevelOverviewCollapsed(!isHighLevelOverviewCollapsed);
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

  function togglePersonalLife() {
    setPersonalLifeCollapsed(!isPersonalLifeCollapsed);
  }

  function onPressKetoFacts() {
    navigation.navigate('KetoFactsMain');
  }

  function expandAll() {
    setCorporateCareerCollapsed(false);
    setHighLevelOverviewCollapsed(false);
    setSideProjectsCollapsed(false);
    setSaltilloCollapsed(false);
    setMotoristsCollapsed(false);
    setGrangeCollapsed(false);
    setHookShotsCollapsed(false);
    setDRCollapsed(false);
    setYCWCollapsed(false);
    setHighlandCollapsed(false);
    setThisAppCollapsed(false);
    setPersonalLifeCollapsed(false);
  }

  function collapseAll() {
    setCorporateCareerCollapsed(true);
    setHighLevelOverviewCollapsed(true);
    setSideProjectsCollapsed(true);
    setSaltilloCollapsed(true);
    setMotoristsCollapsed(true);
    setGrangeCollapsed(true);
    setHookShotsCollapsed(true);
    setDRCollapsed(true);
    setYCWCollapsed(true);
    setHighlandCollapsed(true);
    setThisAppCollapsed(true);
    setPersonalLifeCollapsed(true);
  }

  function onPressDR() {
    visitURL('http://diseasereversals.com');
  }

  function onPressHighland() {
    visitURL('https://highland.k12.oh.us');
  }

  function onPressYCW() {
    visitURL('https://youcuredwhat.com');
  }

  function onPressHookShotsTwitter() {
    visitURL('https://twitter.com/HookShotsApp');
  }

  return (
      <ScrollView>
        <View style={virtaAppStyles.container}>
          <View style={{flex:1}}>
            <Text style={virtaAppStyles.collapsibleParentText} onPress={toggleCorporateCareer}>{isCorporateCareerCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} 14-year Software Dev Corporate Career</Text>
            <Collapsible collapsed={isCorporateCareerCollapsed}>
              <View style={{flexDirection: 'row'}}>
                <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleHighLevelOverview}>{isHighLevelOverviewCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} High-Level Overview</Text>
                </View>
                <Collapsible collapsed={isHighLevelOverviewCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Corporate success</Text> in front-end dev, back-end dev, team leadership, and architecture</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Detail-oriented <Text style={{fontWeight: 'bold'}}>problem solver</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Recent promotion</Text> (February 2022) from <Text style={{fontStyle:'italic'}}>Solution Architect</Text> to <Text style={{fontStyle:'italic'}}>Senior Solution Architect</Text></Text>
                </Collapsible>
                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleSaltillo}>{isSaltilloCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Developer: Saltillo Corporation (2008-2010)</Text>
                  <Image source={require('./assets/saltillo.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isSaltilloCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Developed C++ for Augmentative and Alternative Communication devices</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Worked full-time as a summer intern and part-time during college semesters</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleMotorists}>{isMotoristsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Developer: Motorists Insurance Group [now Encova] (2010-2019)</Text>
                  <Image source={require('./assets/encova.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isMotoristsCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} First few years: Worked on wide variety of technologies. Homegrown systems, back-end systems, front-end systems, Java, Siebel, more</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Last few years: integration developer (Mulesoft ESB and Guidewire)</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Became senior integration developer and <Text style={{fontWeight: 'bold'}}>leader</Text> of small team focused on Document Management during large Systems Transformation project</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleGrange}>{isGrangeCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Architect: Grange Insurance (2019 - current)</Text>
                  <Image source={require('./assets/grange.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isGrangeCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Senior Solution Architect</Text> for Middleware team (Mulesoft ESB)</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Designed over 100 APIs for core systems transformation</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Friendly communication, high-quality analysis and designs, solid ideas and <Text style={{fontWeight: 'bold'}}>proofs of concept</Text></Text>
                </Collapsible>
            </Collapsible>
            <Text style={virtaAppStyles.collapsibleParentText} onPress={toggleSideProjects}>{isSideProjectsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Projects Outside Work</Text>
              <Collapsible collapsed={isSideProjectsCollapsed}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleHookShots}>{isHookShotsCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <Text style={{fontStyle:'italic'}}>Hook Shots App</Text>: iPhone & Android App</Text>
                  <Image source={require('./assets/hookshots.jpeg')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isHookShotsCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Released in July 2015 to App Store and Google Play Store</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Fun, silly basketball app. Create a player, challenge friends to 1-minute contests</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} App tracked records, Points Per Challenge, etc.</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Built for both <Text style={{fontWeight: 'bold'}}>iOS and Android</Text> using Corona SDK (now known as Solar2D)</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Backend coded using PHP and MySQL</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} No longer in App Store but <Text style={virtaAppStyles.bulletedLink} onPress={onPressHookShotsTwitter}>old Twitter account</Text> still exists</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Loading screens had some killer puns</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleDR}>{isDRCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <Text style={{fontStyle:'italic'}}>Disease Reversals</Text> Website</Text>
                  <Image source={require('./assets/diseasereversals.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isDRCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={virtaAppStyles.bulletedLink} onPress={onPressDR}>DiseaseReversals.com</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Site combines my passions of <Text style={{fontWeight: 'bold'}}>health/nutrition</Text> and <Text style={{fontWeight: 'bold'}}>software dev</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Stores anecdotes of real-world <Text style={{fontWeight: 'bold'}}>disease reversals</Text>, categorized by <Text style={{fontWeight: 'bold'}}>diet</Text> used</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={{fontWeight: 'bold'}}>Responsive Front-end</Text>: JavaScript, HTML, CSS. <Text style={{fontWeight: 'bold'}}>Back-end</Text>: MySQL, PHP</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleYCW}>{isYCWCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} <Text style={{fontStyle:'italic'}}>You Cured What?!</Text> Podcast Website</Text>
                  <Image source={require('./assets/youcuredwhat.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isYCWCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={virtaAppStyles.bulletedLink} onPress={onPressYCW}>YouCuredWhat.com</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Website for my "You Cured What?!" podcast about real people <Text style={{fontWeight: 'bold'}}>reversing "irreversible" conditions</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Built using combination of WordPress, Divi, custom CSS, JavaScript, PHP</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleHighland}>{isHighlandCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Highland High School Website</Text>
                  <Image source={require('./assets/highland.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isHighlandCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} <Text style={virtaAppStyles.bulletedLink} onPress={onPressHighland}>highland.k12.oh.us</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} My first paid Web gig</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Responsive website. Built using combination of WordPress, Divi, <Text style={{fontWeight: 'bold'}}>custom CSS</Text>, JavaScript, PHP, MySQL</Text>
                </Collapsible>

                <View style={{flexDirection: 'row'}}>
                  <Text style={virtaAppStyles.collapsibleChildText} onPress={toggleThisApp}>{isThisAppCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} This App</Text>
                  <Image source={require('./assets/virta-favicon.png')}
                    style={virtaAppStyles.logoImageSizing}
                  />
                </View>
                <Collapsible collapsed={isThisAppCollapsed}>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} This app has been a fun side project!</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} It has helped me learn React</Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Demonstrates that I am a strong developer, a <Text style={{fontWeight: 'bold'}}>go-getter</Text>, and very <Text style={{fontWeight: 'bold'}}>aligned with Virta's mission</Text></Text>
                  <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} While we're at it, check out this app's integration with a basic back-end <Text style={virtaAppStyles.bulletedLink} onPress={onPressKetoFacts}>Keto Facts API</Text></Text>
                </Collapsible>
            </Collapsible>
            <Text style={virtaAppStyles.collapsibleParentText} onPress={togglePersonalLife}>{isPersonalLifeCollapsed ? AppConstants.rightArrow : AppConstants.downArrow} Personal Life</Text>
            <Collapsible collapsed={isPersonalLifeCollapsed}>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Husband to a <Text style={{fontWeight: 'bold'}}>lovely</Text> wife.</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Father to <Text style={{fontWeight: 'bold'}}>wonderful</Text> 16-month-old daughter.</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Lifelong learner.</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Trying to align my vocation with my conscience, my passions, and a yearning to help others.</Text>
              <Text style={virtaAppStyles.collapsibleGrandchildText}>{AppConstants.bullet} Striving to live <Text style={{fontWeight: 'bold'}}>authentically</Text>.</Text>
            </Collapsible>
            <Text style={virtaAppStyles.expandCollapseText} onPress={expandAll}>Expand All</Text>
            <Text style={virtaAppStyles.expandCollapseText} onPress={collapseAll}>Collapse All</Text>
          </View>
        </View>
      </ScrollView>
  );
}

export default JoeCompetenceMainScreen;
