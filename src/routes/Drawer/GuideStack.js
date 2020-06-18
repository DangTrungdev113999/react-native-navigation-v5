import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GuideScreen from '~/containers/drawer/Guide';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="guide_screen"
      component={GuideScreen}
      options={({navigation}) => ({
        title: 'Hướng dẫn vay',
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
  </Navigator>
);
