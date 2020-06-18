import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BasicStepScreen from '~/containers/create/BasicStep';
import DisbursementStepScreen from '~/containers/create/DisbursementStep';
import IdentityStepScreen from '~/containers/create/IdentityStep';
import FinanceStepScreen from '~/containers/create/FinanceStep';
import AddressStepScreen from '~/containers/create/AddressStep';
import RelativesStepScreen from '~/containers/create/RelativesStep';
import ResultStepScreen from '~/containers/create/ResultStep';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator>
    <Screen name="basic_step_screen" component={BasicStepScreen} />
    <Screen
      name="disbursement_step_screen"
      component={DisbursementStepScreen}
    />
    <Screen name="identity_step_screen" component={IdentityStepScreen} />
    <Screen name="finance_step_screen" component={FinanceStepScreen} />
    <Screen name="address_step_screen" component={AddressStepScreen} />
    <Screen name="relatives_step_screen" component={RelativesStepScreen} />
    <Screen name="result_step_screen" component={ResultStepScreen} />
  </Navigator>
);
