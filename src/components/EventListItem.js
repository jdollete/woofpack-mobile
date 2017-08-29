import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, CardItem, Text } from 'native-base';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    Actions.eventView({ event: this.props.event });
  }

  render() {
    const { eventName } = this.props.event

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>
              {eventName}
            </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default EventListItem;
