import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '~/containers/home/Home';
import CampaignScreen from '~/containers/home/Campaign';

import DrawerIcon from '~/components/header/DrawerIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="home_screen"
      component={HomeScreen}
      options={({navigation}) => ({
        title: '',
        headerLeft: () => <DrawerIcon navigation={navigation} />,
      })}
    />
    <Screen name="campaign_screen" component={CampaignScreen} />
  </Navigator>
);
