import React from 'react';
import {
  Item,
  Label,
  Input,
  Text
} from 'native-base';

const FloatingInput = ({ label, value, onChangeText }) => {

  return (
    <Item floatingLabel>
      <Label><Text>{label}</Text></Label>
      <Input autoCorrect={false} value={value} onChangeText />
    </Item>
  )
};

export { FloatingInput };
