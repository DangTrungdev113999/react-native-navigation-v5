import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FaqScreen from '~/containers/drawer/Faq';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="faq_screen"
      component={FaqScreen}
      options={({navigation}) => ({
        title: 'Câu hỏi thường gặp',
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
  </Navigator>
);
