import React from 'react';
import {
  Item,
  Label,
  Input,
  Text
} from 'native-base';

const FloatingInput = ({ children }) => {

  return (
    <Item floatingLabel>
      <Label><Text>{children}</Text></Label>
      <Input autoCorrect={false} />
    </Item>
  )
};

export { FloatingInput};
