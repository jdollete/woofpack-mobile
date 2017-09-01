import React from 'react';
import {
  Item,
  Label,
  Input,
  Text
} from 'native-base';

const FloatingInput = ({ label, value, onChangeText, maxLength }) => {

  return (
    <Item floatingLabel>
      <Label><Text>{label}</Text></Label>
      <Input autoCorrect={false} maxLength={maxLength} value={value} onChangeText={onChangeText} />
    </Item>
  )
};

export { FloatingInput };
