import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendView = () => {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    margin: 20
  }
});

export default AttendView;
