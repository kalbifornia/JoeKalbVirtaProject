import { View, StyleSheet, Text } from 'react-native';

const BulletPointRow = ({data, style}) => {

  const dataStyle = StyleSheet.create({
    flex: 1,
  });

  return (
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'green'}}>
        <Text style={style}>{'\u2022'}{data}</Text>
      </View>
  );
}

export {BulletPointRow};
