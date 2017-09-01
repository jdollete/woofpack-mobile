import React from 'react';
import { Drawer } from 'native-base';
import DrawerItems from './DrawerItems';
import EventList from './EventList';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerItems />}
        onClose={() => this.closeDrawer()} >
        <EventList openDrawer={this.openDrawer.bind(this)} />
      </Drawer>
    );
  }
}

export default Drawer;
