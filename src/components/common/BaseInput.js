import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Text, InputGroup, Input } from 'native-base';

const BaseInput = ({ iconName, placeHolder, secureTextEntry }) => {
  const { inputGroupStyle } = styles;

  return (
    <InputGroup rounded style={inputGroupStyle} >
      <Icon name={iconName} style={{color:'#384850'}}/>
      <Input
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder} />
    </InputGroup>
  );
};

const styles = StyleSheet.create({
  inputGroupStyle: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
  }
});

export { BaseInput };
