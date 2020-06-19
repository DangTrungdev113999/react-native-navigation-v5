import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import ManageStack from './ManageStack';
import NotificationStack from './NotificationStack';
import UserStack from './UserStack';
const {Navigator, Screen} = createBottomTabNavigator();

function getTabBarVisible(route, navigation) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'home_screen';

  if (
    routeName === 'home_screen' ||
    routeName === 'loans_screen' ||
    routeName === 'notifications_screen' ||
    routeName === 'user_screen'
  ) {
    return true;
  }
  return false;
}

export default () => {
  return (
    <Navigator>
      <Screen
        name="home_stack"
        component={HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Trang chủ',
          tabBarVisible: getTabBarVisible(route),
        })}
      />
      <Screen
        name="manage_stack"
        component={ManageStack}
        options={({route}) => ({
          tabBarLabel: 'Q.lý đơn vay',
          tabBarVisible: getTabBarVisible(route),
        })}
        listeners={({navigation, route}) => ({
          tabPress: (e) => {
            // e.preventDefault();
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'loans_screen'}],
            // });
          },
        })}
      />
      <Screen
        name="notification_stack"
        component={NotificationStack}
        options={({route}) => ({
          tabBarLabel: 'Thông báo',
          tabBarVisible: getTabBarVisible(route),
        })}
      />
      <Screen
        name="user_stack"
        component={UserStack}
        options={({route}) => ({
          tabBarLabel: 'Cá nhân',
          tabBarVisible: getTabBarVisible(route),
        })}
      />
    </Navigator>
  );
};
