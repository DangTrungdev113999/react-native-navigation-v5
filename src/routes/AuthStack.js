import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '~/containers/auth/Welcome';
import RegisterScreen from '~/containers/auth/Register';
import LoginScreen from '~/containers/auth/Login';
import ForgotScreen from '~/containers/auth/Forgot';
import VerificationScreen from '~/containers/auth/Verification';
import TermScreen from '~/containers/drawer/Term';
import SetPasswordScreen from '~/containers/auth/SetPassword';
import RegisterSuccessScreen from '~/containers/auth/RegisterSuccess';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <Navigator initialRouteName="welcome_screen">
    <Screen
      name="welcome_screen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="register_screen"
      component={RegisterScreen}
      options={{
        title: 'Nhập số điện thoại',
      }}
    />
    <Screen
      name="login_screen"
      component={LoginScreen}
      options={{title: 'Đăng nhập'}}
    />
    <Screen
      name="forgot_screen"
      component={ForgotScreen}
      options={{title: 'Quên mật khẩu'}}
    />
    <Screen
      name="verification_screen"
      component={VerificationScreen}
      options={{title: 'Xác thực OTP'}}
    />
    <Screen
      name="term_screen"
      component={TermScreen}
      options={{title: 'Điều khoản sử dụng'}}
    />
    <Screen
      name="set_password_screen"
      component={SetPasswordScreen}
      options={{title: 'Nhập mật khẩu'}}
    />
    <Screen
      name="register_success_screen"
      component={RegisterSuccessScreen}
      options={{headerShown: false}}
    />
  </Navigator>
);
