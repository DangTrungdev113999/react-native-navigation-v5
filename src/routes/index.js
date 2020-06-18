import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import Drawer from './Drawer';
import CreateLoanStack from './CreateLoanStack';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator headerMode="none">
    <Screen
      name="auth_stack"
      component={AuthStack}
      options={{headerShown: false}}
    />
    <Screen name="drawer" component={Drawer} options={{headerShown: false}} />
    <Screen name="create_loan_stack" component={CreateLoanStack} />
  </Navigator>
);
