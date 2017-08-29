import React from 'react';
import { View, Text } from 'react-native';

class EventView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventName, city, dateString, street, zipCode } = this.props.event
    return (
      <View>
        <Text>{eventName}</Text>
      </View>
    );
  }
}

export default EventView;
