import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import ManageStack from './ManageStack';
import NotificationStack from './NotificationStack';
import UserStack from './UserStack';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
  <Navigator>
    <Screen
      name="home_stack"
      component={HomeStack}
      options={{tabBarLabel: 'Trang chủ'}}
    />
    <Screen
      name="manage_stack"
      component={ManageStack}
      options={{tabBarLabel: 'Q.lý đơn vay'}}
    />
    <Screen
      name="notification_stack"
      component={NotificationStack}
      options={{tabBarLabel: 'Thông báo'}}
    />
    <Screen
      name="user_stack"
      component={UserStack}
      options={{tabBarLabel: 'Cá nhân'}}
    />
  </Navigator>
);
