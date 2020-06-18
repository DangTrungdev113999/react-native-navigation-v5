import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BasicStepScreen from '~/containers/create/BasicStep';
import DisbursementStepScreen from '~/containers/create/DisbursementStep';
import IdentityStepScreen from '~/containers/create/IdentityStep';
import FinanceStepScreen from '~/containers/create/FinanceStep';
import AddressStepScreen from '~/containers/create/AddressStep';
import RelativesStepScreen from '~/containers/create/RelativesStep';
import ResultStepScreen from '~/containers/create/ResultStep';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen
      name="basic_step_screen"
      component={BasicStepScreen}
      options={({navigation}) => ({
        title: 'Vay qua CMND/CCCD',
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
    <Screen
      name="disbursement_step_screen"
      component={DisbursementStepScreen}
      options={{
        title: 'Vay qua CMND/CCCD',
      }}
    />
    <Screen
      name="identity_step_screen"
      component={IdentityStepScreen}
      options={{
        title: 'Vay qua CMND/CCCD',
      }}
    />
    <Screen
      name="finance_step_screen"
      component={FinanceStepScreen}
      options={{
        title: 'Vay qua CMND/CCCD',
      }}
    />
    <Screen
      name="address_step_screen"
      component={AddressStepScreen}
      options={{
        title: 'Vay qua CMND/CCCD',
      }}
    />
    <Screen
      name="relatives_step_screen"
      component={RelativesStepScreen}
      options={{
        title: 'Vay qua CMND/CCCD',
      }}
    />
    <Screen
      name="result_step_screen"
      component={ResultStepScreen}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);
