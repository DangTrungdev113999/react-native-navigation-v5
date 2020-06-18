import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '~/containers/drawer/Intro';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="intro_screen"
      component={IntroScreen}
      options={({navigation}) => ({
        title: 'Giới thiệu',
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
  </Navigator>
);
