import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import Tab from './Tab';
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
    <Screen name="drawer" component={Drawer} />
    <Screen name="create_loan_stack" component={CreateLoanStack} />
  </Navigator>
);
