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
    paddingLeft: 30,
  },
  belowImageText: {
    fontSize: '30px',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
  },
  detailedCompareButtonText: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  factText: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontFamily: '\'Montserrat\',Helvetica,Arial,Lucida,sans-serif',
    color: AppConstants.virtaDarkBlue
  },
  barChartLabel: {
    color: 'black'
  },
  bulletedLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: AppConstants.virtaDarkBlue,
  }
});

export {virtaAppStyles};
