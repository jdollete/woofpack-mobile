import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ spinnerSize }) => {
  return(
    <View style={styles.spinnerStyle}>
    <ActivityIndicator color="#007aff" size={spinnerSize || 'large'} />
    </View>
  )
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
