import { StyleSheet } from 'react-native';
import {AppConstants} from './AppConstants';

const virtaAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBotton: 25
  },
  headerText: {
    fontSize: '24px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    fontWeight: 'bold'
  },
  subheaderText: {
    fontSize: '16px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    fontWeight: 'bold',
  },
  unboldedHeaderText: {
    fontSize: '24px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
  },
  mainText: {
    fontSize: '12px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
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
    fontSize:'24px',
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    textTransform: 'uppercase',
    color: 'white',
  },
  standardSmallerButtonText: {
    fontSize:'16px',
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
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
    fontSize:'10px',
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    textTransform: 'uppercase',
    color: 'white',
    textDecorationLine: 'none',
    textDecorationThickness: 50,
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
    fontSize: '24px',
    fontFamily: '"Courier New", monospace',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase'
  },
  footerText: {
    fontSize: '18px',
  },
  bulletPointStyle: {
    fontSize: '48px',
  },
  bulletedMainListText: {
    fontSize: '30px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingBottom: 15,
  },
  subBulletText: {
    fontSize: '20px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingBottom: 15,
    paddingLeft: 30,
  },
  collapsibleParentText: {
    fontSize: '30px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingBottom: 15,
  },
  collapsibleChildText: {
    fontSize: '24px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingBottom: 12,
    paddingLeft: 15,
  },
  collapsibleGrandchildText: {
    fontSize: '20px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    paddingBottom: 10,
    paddingLeft: 40,
  },
  belowImageText: {
    fontSize: '30px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
  },
  detailedCompareButtonText: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  factView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  factNumberText: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    color: AppConstants.virtaDarkBlue
  },
  trueFactText: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    color: AppConstants.virtaDarkBlue
  },
  falseFactText: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
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
  }
});

export {virtaAppStyles};
