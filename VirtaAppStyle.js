import { StyleSheet } from 'react-native';
import {AppConstants} from './AppConstants';

const virtaAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Helvetica',
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  unboldedHeaderText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
  },
  mainText: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  standardButton: {
    backgroundColor: AppConstants.virtaDarkBlue,
    maxWidth: 300,
    minWidth: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: AppConstants.virtaBlue,
    alignItems: 'center',
  },
  standardButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    color: 'white',
  },
  standardSmallerButtonText: {
    fontSize:16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    color: 'white',
  },
  smallButton: {
    backgroundColor: AppConstants.virtaDarkBlue,
    maxWidth: 200,
    minWidth: 100,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: AppConstants.virtaBlue,
    alignItems: 'center',
  },
  smallButtonText: {
    fontSize:10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    color: 'white',
    textDecorationLine: 'none',
  },
  mediumButton: {
    backgroundColor: AppConstants.virtaDarkBlue,
    maxWidth: 225,
    minWidth: 150,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: AppConstants.virtaBlue,
    alignItems: 'center',
  },
  mediumButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    color: 'white',
  },
  usualCareButton: {
    maxWidth: 300,
    minWidth: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
    borderRadius: 25,
    alignItems: 'center'
  },
  usualCareButtonText: {
    fontSize: 24,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase'
  },
  footerText: {
    fontSize: 18,
  },
  bulletPointStyle: {
    fontSize: 48,
  },
  bulletedMainListText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    paddingBottom: 15,
  },
  subBulletText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    paddingBottom: 15,
    paddingLeft: 30,
  },
  bulletedJokeText: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    paddingBottom: 15,
  },
  collapsibleParentText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    paddingBottom: 15,
    paddingRight: 5,
  },
  collapsibleChildText: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 5,
  },
  collapsibleGrandchildText: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 5,
  },
  belowImageText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
  detailedCompareButtonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  factsView: {
    paddingLeft: 10,
  },
  factNumberText: {
    paddingBottom: 5,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: AppConstants.virtaDarkBlue
  },
  trueFactText: {
    paddingBottom: 5,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: AppConstants.virtaDarkBlue
  },
  falseFactText: {
    paddingBottom: 5,
    paddingTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textDecorationLine: 'line-through',
    color: 'red',
  },
  barChartLabel: {
    color: 'black'
  },
  bulletedLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: AppConstants.virtaDarkBlue,
  },
  expandCollapseText: {
    paddingTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: AppConstants.virtaDarkBlue,
  },
  logoImageSizing: {
    height: 24,
    width: 24,
    marginLeft: 4,
  },
});

export {virtaAppStyles};
