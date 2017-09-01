import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, CardItem, Text } from 'native-base';
import DateView from './DateView';
import DistanceView from './DistanceView';
import AttendView from './AttendView';
import { AttendButton } from './common';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    Actions.eventView({ event: this.props.event });
  }

  render() {
    const { eventName, dateString } = this.props.event
    const { viewStyle, titleViewStyle, titleStyle, contentViewStyle } = styles

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View style={viewStyle}>
          <View style={titleViewStyle}>
            <Text style={titleStyle}>
              {eventName}
            </Text>
          </View>

          <View style={contentViewStyle}>
            <DateView date={dateString}/>
            <DistanceView />
            <AttendView />
            <AttendButton />
          </View>

        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10
  },
  titleViewStyle: {
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1,
    alignSelf: 'center'
  },
  contentViewStyle: {
    // height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default EventListItem;
