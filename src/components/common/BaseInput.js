import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Icon, InputGroup, Input, Form, Item, Label } from 'native-base';

const BaseInput = ({ iconName, placeHolder, secureTextEntry, value, onChangeText, labelName, keyboardType }) => {
  const { inputGroupStyle, labelStyle } = styles;

  return (
    <Form>
      <Item floatingLabel style={inputGroupStyle}>
        <Label><Text style={labelStyle}>{labelName}</Text></Label>
        <Input
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCorrect={false}
          // placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
        />
      </Item>
    </Form>
  );
};

const styles = StyleSheet.create({
  inputGroupStyle: {
    borderColor: '#F49F0A',
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  labelStyle: {
    color: '#F49F0A',
  }
});

export { BaseInput };
