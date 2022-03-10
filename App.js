import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './TitleScreen';
import GoalScreen from './GoalScreen';
import CompareMainScreen from './CompareMainScreen';
import UsualCareMainScreen from './UsualCareMainScreen';
import VirtaCareMainScreen from './VirtaCareMainScreen';
import DetailedCompareMainScreen from './DetailedCompareMainScreen';
import KetoFactsMainScreen from './KetoFactsMainScreen';
import CompareInflammationScreen from './CompareInflammationScreen';
import CompareTheFoodScreen from './CompareTheFoodScreen';
import AboutJoeMainScreen from './AboutJoeMainScreen';
import JoeCompetenceMainScreen from './JoeCompetenceMainScreen';
import JoeAttitudeMainScreen from './JoeAttitudeMainScreen';
import JoeAlignmentMainScreen from './JoeAlignmentMainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Title"
            component={TitleScreen}
            options={{ title: "Joe's POC React App" }}
            />
          <Stack.Screen
            name="Goal"
            component={GoalScreen}
            options={{ title: "Joe's Goal", headerShown: true }}
            />
          <Stack.Screen
            name="KetoFactsMain"
            component={KetoFactsMainScreen}
            options={{ title: 'Keto Facts From API', headerShown: true }}
            />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="CompareMain"
            component={CompareMainScreen}
            options={{title: "Compare Main Screen", headerShown: true}}
            />
          <Stack.Screen
            name="UsualCareMain"
            component={UsualCareMainScreen}
            options={{title: "The Usual Care", headerShown: true}}
            />
          <Stack.Screen
            name="VirtaCareMain"
            component={VirtaCareMainScreen}
            options={{title: "The Virta Way", headerShown: true}}
            />
          <Stack.Screen
            name="DetailedCompareMain"
            component={DetailedCompareMainScreen}
            options={{title: "Overview: Usual Care vs. Virta", headerShown: true}}
            />
          <Stack.Screen
            name="CompareInflammation"
            component={CompareInflammationScreen}
            options={{title: "Inflammation Comparison: Usual Care vs. Virta", headerShown: true}}
            />
          <Stack.Screen
            name="CompareTheFood"
            component={CompareTheFoodScreen}
            options={{title: "Food Comparison: Usual Care vs. Virta", headerShown: true}}
          />
          <Stack.Screen
            name="AboutJoeMain"
            component={AboutJoeMainScreen}
            options={{title: "About Joe", headerShown: true}}
          />
          <Stack.Screen
            name="JoeCompetence"
            component={JoeCompetenceMainScreen}
            options={{title: "Joe's Competence", headerShown: true}}
          />
          <Stack.Screen
            name="JoeAttitude"
            component={JoeAttitudeMainScreen}
            options={{title: "Joe's Attitude", headerShown: true}}
          />
          <Stack.Screen
            name="JoeAlignment"
            component={JoeAlignmentMainScreen}
            options={{title: "Alignment: Virta and Joe", headerShown: true}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
