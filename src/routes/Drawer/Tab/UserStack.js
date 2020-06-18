import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserScreen from '~/containers/user/User';
import ProfileScreen from '~/containers/user/Profile';
import LinkingScreen from '~/containers/user/Linking';
import ChangePassword from '~/containers/user/ChangePassword';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="user_screen"
      component={UserScreen}
      options={{
        title: 'Cá nhân',
      }}
    />
    <Screen
      name="profile_screen"
      component={ProfileScreen}
      options={{
        title: 'Hồ sơ cá nhân',
      }}
    />
    <Screen
      name="linking_screen"
      component={LinkingScreen}
      options={{
        title: 'Liên kết mạng xã hội',
      }}
    />
    <Screen
      name="change_password_screen"
      component={ChangePassword}
      options={{
        title: 'Đổi mật khẩu',
      }}
    />
  </Navigator>
);
