import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NotificationsScreen from '~/containers/notification/Notifications';
import NotificationDetailsScreen from '~/containers/notification/NotificationDetails';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="notifications_screen"
      component={NotificationsScreen}
      options={{title: 'Thông báo'}}
    />
    <Screen
      name="notification_details_screen"
      component={NotificationDetailsScreen}
      options={{title: 'Thông báo'}}
    />
  </Navigator>
);
