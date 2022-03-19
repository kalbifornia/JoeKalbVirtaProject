import { Linking } from 'react-native';

export const visitURL = (url) => {
  Linking.openURL(url).catch((err) => {
    console.error("An error occurred trying to open " + url, err);
    alert("An error occurred trying to open " + url);
  });
};
