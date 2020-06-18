import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TermScreen from '~/containers/drawer/Term';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="term_screen"
      component={TermScreen}
      options={({navigation}) => ({
        title: 'Điều khoản sử dụng',
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
  </Navigator>
);
