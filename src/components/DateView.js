import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateView = ({ date }) => {
  const { viewStyle, monthStyle, dayStyle } = styles;
  console.log(date.split(" ")[1]);
  const dateSplit = date.split(" ");
  const month = dateSplit[1];
  const dayNum = dateSplit[2];
  return (
    <View style={viewStyle}>
      <View><Text style={monthStyle}>{month}</Text></View>
      <View><Text style={dayStyle}>{dayNum}</Text></View>

    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    margin: 20
  },
  monthStyle: {
    alignSelf: 'center',
    fontSize: 10
  },
  dayStyle: {
    fontSize: 20
  }
});

export default DateView;
